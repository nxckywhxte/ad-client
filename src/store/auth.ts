import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserResponse } from '@/types/form'

type AuthState = {
  isAuthenticated: boolean
  userData: UserResponse | null | undefined
}

type AuthActions = {
  setAuthenticated: () => void
  setUserData: (userData: UserResponse | null | undefined) => void
}

export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    set => ({
      isAuthenticated: false,
      userData: null,
      setAuthenticated: () =>
        set(state => ({
          isAuthenticated: true,
        })),
      setUserData: userData =>
        set(state => ({
          userData: userData,
        })),
    }),
    {
      name: 'auth',
    }
  )
)
