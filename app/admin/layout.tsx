'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  // Don't show the admin header on the login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div>
      <header className="bg-warm-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/admin" className="text-xl font-serif font-bold hover:text-warm-200 transition-colors">
            THE TABLE - Admin
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" target="_blank" className="text-sm text-warm-300 hover:text-white transition-colors">
            View Site
          </a>
          <button
            onClick={handleLogout}
            className="text-sm bg-warm-700 hover:bg-warm-600 px-4 py-2 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </header>
      {children}
    </div>
  )
}
