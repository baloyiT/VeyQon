interface GoldIconProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

export function GoldIcon({ children, size = 'md' }: GoldIconProps) {
  return (
    <div
      className={`${sizeMap[size]} rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary`}
    >
      {children}
    </div>
  )
}
