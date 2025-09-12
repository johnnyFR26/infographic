"use client"

interface NavigationDotsProps {
  total: number
  active: number
  onNavigate: (index: number) => void
}

export function NavigationDots({ total, active, onNavigate }: NavigationDotsProps) {
  return (
    <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm rounded-full p-2 border border-border/50">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === index ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
          aria-label={`Navegar para seção ${index + 1}`}
        />
      ))}
    </div>
  )
}
