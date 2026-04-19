import { cn } from '../../lib/utils'

export function Card({ className = '', children, ...props }) {
  return (
    <article className={cn('ui-card', className)} {...props}>
      {children}
    </article>
  )
}

export function CardHeader({ className = '', children, ...props }) {
  return (
    <header className={cn('ui-card__header', className)} {...props}>
      {children}
    </header>
  )
}

export function CardTitle({ className = '', children, ...props }) {
  return (
    <h3 className={cn('ui-card__title', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className = '', children, ...props }) {
  return (
    <p className={cn('ui-card__description', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={cn('ui-card__content', className)} {...props}>
      {children}
    </div>
  )
}
