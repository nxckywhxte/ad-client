import { SERVER_BASE_URL } from '@/utils/api'
import { NextResponse } from 'next/server'

export async function POST() {
  const res = await fetch(
    `${SERVER_BASE_URL}/auth/register`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: '',
        email: '',
        rawPassword: '',
        roleName: '',
      }),
    }
  )

  const data = await res.json()

  return NextResponse.json(data)
}
