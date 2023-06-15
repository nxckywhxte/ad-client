import { SERVER_BASE_URL } from '@/utils/api'
import { NextResponse } from 'next/server'

export const getRoles = async () => {
  await fetch(`${SERVER_BASE_URL}/roles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => {
    const data = r.json()
    console.log(data)
    return NextResponse.json(data)
  })
}
