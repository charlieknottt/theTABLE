import { cookies } from 'next/headers'
import crypto from 'crypto'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token) return false

  const expected = crypto
    .createHmac('sha256', process.env.ADMIN_SESSION_SECRET!)
    .update('authenticated')
    .digest('hex')

  return token === expected
}

export function generateSessionToken(): string {
  return crypto
    .createHmac('sha256', process.env.ADMIN_SESSION_SECRET!)
    .update('authenticated')
    .digest('hex')
}
