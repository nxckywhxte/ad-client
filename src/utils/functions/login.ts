import { LoginUserDto } from '@/utils/dto/login-user.dto'
import { SERVER_BASE_URL } from '@/utils/api'
import { NextResponse } from 'next/server'

export const handleLoginUser = async (
  loginUserDto: LoginUserDto
) => {
  await fetch(`${SERVER_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: loginUserDto.username,
      rawPassword: loginUserDto.rawPassword,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => {
    const data = r.json()
    console.log(data)
    NextResponse.json(data)
  })
}
