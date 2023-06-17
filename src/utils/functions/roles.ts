import { SERVER_BASE_URL } from '@/utils/api'
import toast from 'react-hot-toast'

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
    toast.error('Ошибка при получении ролей!')
  }
  return res.json()
}
