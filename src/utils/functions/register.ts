import { SERVER_BASE_URL } from '@/utils/api'
import { NextResponse } from 'next/server'
import { RegisterUserDto } from '@/utils/dto/register-user.dto'
import toast from 'react-hot-toast'

export const handleRegisterUser = async (
  registerUserDto: RegisterUserDto
) => {
  const res = await fetch(
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
  if (!res.ok) {
    toast.error('Ошибка при регистрации!')
  }
  toast.success('Регистрация прошла успешно!')
  return res.json()
}
