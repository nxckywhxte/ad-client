import { LoginUserDto } from '@/utils/dto/login-user.dto'
import { SERVER_BASE_URL } from '@/utils/api'
import toast from 'react-hot-toast'

export const handleLoginUser = async (
  loginUserDto: LoginUserDto
) => {
  const res = await fetch(
    `${SERVER_BASE_URL}/auth/login`,
    {
      method: 'POST',
      body: JSON.stringify({
        username: loginUserDto.username,
        rawPassword: loginUserDto.rawPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!res.ok) {
    toast.error('Ошибка при авторизации!')
  }
  toast.success('Авторизация прошла успешно!')
  return res.json()
}
