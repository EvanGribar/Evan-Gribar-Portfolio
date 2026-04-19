import { cn } from '../../lib/utils'

export function Button({ className = '', variant = 'default', asChild = false, children, ...props }) {
  const Comp = asChild ? 'span' : 'button'

  return (
    <Comp
      className={cn(
        'ui-button',
        variant === 'outline' && 'ui-button--outline',
        variant === 'ghost' && 'ui-button--ghost',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
