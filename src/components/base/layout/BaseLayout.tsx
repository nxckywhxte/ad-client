import type { FC, PropsWithChildren } from 'react'
import { BaseNavigationBar } from '@/components/base/base-navigation-bar/BaseNavigationBar'
import { Footer } from '@/components/base/footer/Footer'

export const BaseLayout: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <BaseNavigationBar />
      <main className='container mx-auto flex flex-1 flex-col py-4'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
