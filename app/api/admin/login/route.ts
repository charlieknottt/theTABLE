import { NextRequest, NextResponse } from 'next/server'
import { generateSessionToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = generateSessionToken()
  const response = NextResponse.json({ success: true })

  response.cookies.set('admin_session', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  })

  response.cookies.set('admin_logged_in', '1', {
    httpOnly: false,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24,
  })

  return response
}
