interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
}
const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  const variantClasses =
    variant === 'outline'
      ? 'border border-input hover:bg-accent hover:text-accent-foreground'
      : 'bg-red-600 text-primary-foreground'

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>
}

export default Badge
