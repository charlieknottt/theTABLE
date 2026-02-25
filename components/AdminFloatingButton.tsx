'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AdminFloatingButton() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(document.cookie.includes('admin_session='))
  }, [])

  if (!isAdmin) return null

  return (
    <Link
      href="/admin"
      className="fixed bottom-6 right-6 z-50 bg-warm-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-warm-800 transition-colors text-sm font-semibold"
    >
      Admin
    </Link>
  )
}
