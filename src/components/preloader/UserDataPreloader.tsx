'use client'

import { useRef } from 'react'
import { useAuthStore } from '@/store/auth'
import { UserResponse } from '@/types/form'

export const UserDataPreloader = ({
  data,
}: {
  data: UserResponse | undefined | null
}) => {
  const userDataInitialized = useRef(false)
  if (!userDataInitialized.current) {
    useAuthStore.setState({
      userData: data,
    })
    userDataInitialized.current = true
  }
  return null
}
