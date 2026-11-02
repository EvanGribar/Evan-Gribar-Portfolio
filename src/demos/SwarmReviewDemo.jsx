import { Stage } from '../stageshow/kit/stage'
import { Roll } from '../stageshow/kit/motion/Roll'
import { Bar } from '../stageshow/kit/window'
import { stageLook } from './look'
import './demos.css'

// Four specialist reviewers inspect a change, a blocking finding is debated,
// and the system delivers one decision. No cursor: this is the system's story,
// so the states and their timing carry it.

const AGENTS = [
  { code: 'SEC', role: 'Security', findings: '2 findings', blocking: true },
  { code: 'PERF', role: 'Performance', findings: '1 finding', concur: true },
  { code: 'ARCH', role: 'Architecture', findings: '1 note' },
  { code: 'DX', role: 'Experience', findings: 'Clear' },
]

const DEBATE = [
  { agent: 'SEC', round: '01', verdict: 'BLOCKING', copy: 'Untrusted input reaches query construction.', delay: 0 },
  { agent: 'PERF', round: '02', verdict: 'CONCUR', copy: 'Low traffic does not reduce the risk.', delay: 200 },
]

const initial = { step: 0 }
const poster = { step: 5 }

async function script(a) {
  await a.wait(420)
  a.mark('review')
  await a.set({ step: 1 })
  await a.wait(900)
  a.mark('findings')
  await a.set({ step: 2 })
  await a.wait(1100)
  a.mark('debate')
  await a.set({ step: 3 })
  await a.wait(1600)
  await a.set({ step: 4 })
  await a.wait(800)
  a.mark('decision')
  await a.set({ step: 5 })
  await a.wait(2600)
}

function Top({ s }) {
  return (
    <>
      <header className="sw-top">
        <span className="sw-word">SWARM REVIEW <span>/ pull request</span></span>
        <span className="sw-state" data-done={s.step >= 4 || undefined}>
          <i />
          <Roll variant="fade">
            {s.step >= 4 ? 'REVIEW COMPLETE' : s.step >= 3 ? 'IN DEBATE' : 'REVIEWING'}
          </Roll>
        </span>
      </header>
      <div className="sw-sub">
        <span>#248</span>
        <span className="sw-faint">feature/auth-scopes → main</span>
        <span className="sw-run">4 reviewers</span>
      </div>
    </>
  )
}

function PullRequest() {
  return (
    <div className="sw-pr">
      <span className="sw-pr-num">#248</span>
      <div className="sw-pr-copy">
        <strong>fix: scope query parameters</strong>
        <span>3 files · +48 −12 · 2 rounds of debate</span>
      </div>
    </div>
  )
}

function Agent({ agent, s, i }) {
  return (
    <div
      className="sw-agent"
      data-in={s.step >= 1 || undefined}
      data-blocking={agent.blocking || undefined}
      style={{ transitionDelay: s.step >= 1 ? `${i * 90}ms` : '0ms' }}
    >
      <b>{agent.code}</b>
      <span className="sw-agent-role">{agent.role}</span>
      <span className="sw-agent-find" data-found={s.step >= 2 || undefined} data-blocking={agent.blocking || undefined}>
        <Roll variant="fade">{s.step >= 2 ? agent.findings : 'reviewing'}</Roll>
      </span>
    </div>
  )
}

function Debate({ s, compact }) {
  return (
    <section className="sw-debate">
      <p className="sw-label">Structured debate</p>
      <div className="sw-debate-body">
        <div className="sw-skeleton" data-on={s.step < 3 || undefined}>
          <div>
            <Bar w={54} h={5} tone={2} />
            <Bar w={compact ? 240 : 250} h={6} tone={3} />
            <Bar w={compact ? 176 : 190} h={5} tone={2} />
          </div>
          <div>
            <Bar w={62} h={5} tone={2} />
            <Bar w={compact ? 214 : 232} h={6} tone={3} />
          </div>
        </div>
        {DEBATE.map((line) => (
          <div
            className="sw-line"
            key={line.agent}
            data-in={s.step >= 3 || undefined}
            style={{ transitionDelay: s.step >= 3 ? `${line.delay}ms` : '0ms' }}
          >
            <div className="sw-line-top">
              <span>{line.agent} / {line.round}</span>
              <strong>{line.verdict}</strong>
            </div>
            <p>{line.copy}</p>
          </div>
        ))}
      </div>
      <div className="sw-round">
        <span>ROUND</span>
        <strong><Roll>{s.step >= 3 ? '02 / 02' : '01 / 02'}</Roll></strong>
      </div>
    </section>
  )
}

function Decision({ s }) {
  return (
    <div className="sw-decision" data-done={s.step >= 5 || undefined}>
      <div className="sw-verdict-wrap">
        <p className="sw-label"><b>Principal decision</b></p>
        <p className="sw-verdict">
          <Roll>{s.step >= 5 ? 'Merge held' : 'Awaiting debate'}</Roll>
        </p>
        <p className="sw-decision-meta">
          {s.step >= 5 ? '1 blocking finding · 2 agents concur' : 'Senior reviewer reads the transcript'}
        </p>
      </div>
      <span className="sw-stamp" data-on={s.step >= 5 || undefined}>
        <Roll variant="fade">{s.step >= 5 ? 'CHANGES REQUESTED' : 'IN REVIEW'}</Roll>
      </span>
    </div>
  )
}

export default function SwarmReviewDemo() {
  return (
    <div className="demo-visual" aria-hidden="true">
      <Stage
        {...stageLook}
        width={660}
        height={640}
        compact={{ below: 560, width: 358, height: 680 }}
        initial={initial}
        poster={poster}
        script={script}
        play="once"
        unframed
        className="demo-sw"
      >
        {(s, _rect, layout) =>
          layout === 'compact' ? (
            <div className="sw sw--compact">
              <Top s={s} />
              <PullRequest />
              <div className="sw-c-agents">
                {AGENTS.map((agent, i) => <Agent agent={agent} s={s} i={i} key={agent.code} />)}
              </div>
              <Debate s={s} compact />
              <Decision s={s} />
            </div>
          ) : (
            <div className="sw">
              <Top s={s} />
              <PullRequest />
              <div className="sw-grid">
                <section className="sw-agents">
                  <p className="sw-label">Independent review</p>
                  {AGENTS.map((agent, i) => <Agent agent={agent} s={s} i={i} key={agent.code} />)}
                  <p className="sw-agents-foot">Independent reads · no shared context</p>
                </section>
                <Debate s={s} />
              </div>
              <Decision s={s} />
            </div>
          )
        }
      </Stage>
    </div>
  )
}
