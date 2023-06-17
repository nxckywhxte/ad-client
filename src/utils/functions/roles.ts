import { SERVER_BASE_URL } from '@/utils/api'

export const getRoles = async () => {
  const res = await fetch(
    `${SERVER_BASE_URL}/roles`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!res.ok) {
    throw new Error('Ошибка получения ролей')
  }
  return res.json()
}
