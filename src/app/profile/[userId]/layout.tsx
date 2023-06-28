import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { BaseNavigationBar } from '@/components/base/base-navigation-bar/BaseNavigationBar'

export const metadata: Metadata = {
  title: 'АГНИ - Автматизация | Страница пользователя',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

type ProfilePageProps = {
  children?: ReactNode
}

const ProfileLayout: FC<ProfilePageProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <BaseNavigationBar />
      <main className='container mx-auto flex flex-1 flex-col items-center justify-center py-4'>
        {children}
      </main>
    </div>
  )
}

export default ProfileLayout
