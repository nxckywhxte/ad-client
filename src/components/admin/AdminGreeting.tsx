'use client'
import { useAuthStore } from '@/store/auth'

export const AdminGreeting = () => {
  const userData = useAuthStore(state => state.userData)
  return (
    <div>
      <p>
        Добро пожаловать,{' '}
        <span className={'dark:text-drPurple'}>
          {userData?.profile.lastName} {userData?.profile.firstName}{' '}
          {userData?.profile.patronymic}
        </span>
      </p>
    </div>
  )
}
