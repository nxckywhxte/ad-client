import { SERVER_BASE_URL } from '@/utils/api'
import { NextResponse } from 'next/server'
import { RegisterUserDto } from '@/utils/dto/register-user.dto'

export const handleRegisterUser = async (
  registerUserDto: RegisterUserDto
) => {
  await fetch(
    `${SERVER_BASE_URL}/auth/register`,
    {
      method: 'POST',
      body: JSON.stringify({
        username: registerUserDto.username,
        email: registerUserDto.email,
        rawPassword: registerUserDto.rawPassword,
        roleName: registerUserDto.roleName,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(async r => {
      const data = await r.json()
      NextResponse.json(data)
    })
    .catch(e => {
      console.log(e)
    })
}
