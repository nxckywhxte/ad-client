import { FC, PropsWithChildren } from 'react'
import { AuthNavigationBar } from '@/components/base/auth-navigation-bar/AuthNavigationBar'

export const AuthBaseLayout: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <AuthNavigationBar />
      <main className='container mx-auto flex flex-1 flex-col py-4'>
        {children}
      </main>
    </div>
  )
}
