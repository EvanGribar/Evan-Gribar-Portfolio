import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion'

export default function Contact() {
    // REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE ID
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || "");

    if (state.succeeded) {
        return (
            <section id="contact" className="min-h-screen flex items-center justify-center text-white relative z-10 py-32">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">Message Sent.</h2>
                    <p className="text-xl text-gray-300 mb-8">Thanks for reaching out! I'll get back to you as soon as possible.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-white border-b border-white pb-1 hover:text-gray-300 transition-colors uppercase tracking-widest text-sm"
                    >
                        Send another message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="min-h-screen flex items-center text-white relative z-10 py-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tighter">
                            Let's<br />Talk.
                        </h2>
                        <div className="space-y-4 text-xl font-light text-gray-400">
                            <p>Business Analytics</p>
                            <p>Digital Strategy</p>
                            <p>Consulting</p>
                        </div>
                        <div className="mt-12 flex gap-8">
                            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || ""}`} className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm border-b border-white pb-1">Email</a>
                            <a href="https://www.linkedin.com/in/evangribar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm border-b border-white pb-1">LinkedIn</a>
                        </div>
                    </div>

                    <div className="p-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">What's your name?</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800"
                                    placeholder="John Doe"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Your email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800"
                                    placeholder="john@example.com"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Tell me about your project</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="1"
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800 resize-none h-auto"
                                    placeholder="I need a..."
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="text-2xl font-light border-b border-transparent hover:border-white transition-all pb-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Sending...' : 'Send Message →'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
