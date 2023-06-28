import { API_BASE_URL } from '@/utils/constants'
import toast from 'react-hot-toast'
import { destroyCookie } from 'nookies'
import { useAuthStore } from '@/store/auth'

export const handleLogout = async () => {
  const res = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
  })
  if (!res.ok) {
    toast.error('Ошибка при попытке выйти')
  }
  destroyCookie(null, 'token')
  useAuthStore.setState({
    userData: null,
    isAuthenticated: false,
  })
  toast.success('Выход выполнен успешно')
}
