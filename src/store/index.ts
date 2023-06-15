import { create } from 'zustand'
import { FilteredUser } from '@/utils/types'

type Store = {
  authUser: FilteredUser | null
  loading: boolean
  setAuthUser: (user: FilteredUser | null) => void
  setLoading: (isLoading: boolean) => void
  reset: () => void
}

const useStore = create<Store>(set => ({
  authUser: null,
  loading: false,
  setAuthUser: user =>
    set(state => ({ ...state, authUser: user })),
  setLoading: isLoading =>
    set(state => ({
      ...state,
      loading: isLoading,
    })),
  reset: () =>
    set({ authUser: null, loading: false }),
}))

export default useStore
