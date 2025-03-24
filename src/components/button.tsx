import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default'
  size?: 'sm' | 'default'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variantClasses =
    variant === 'outline'
      ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      : 'bg-red-500 text-primary-foreground hover:bg-red-600 focus:bg-red-'
  const sizeClasses = size === 'sm' ? 'h-9 px-3 text-xs' : 'h-10 py-2 px-4'

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
