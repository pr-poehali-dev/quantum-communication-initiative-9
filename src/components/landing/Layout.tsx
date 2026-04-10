import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="h-screen overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1f2f4f 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4a90d9 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1e6fa8 0%, transparent 70%)' }} />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
