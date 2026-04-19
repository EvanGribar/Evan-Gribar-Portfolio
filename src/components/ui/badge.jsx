import { cn } from '../../lib/utils'

export function Badge({ className = '', variant = 'default', children, ...props }) {
  return (
    <span
      className={cn('ui-badge', variant === 'outline' && 'ui-badge--outline', className)}
      {...props}
    >
      {children}
    </span>
  )
}
