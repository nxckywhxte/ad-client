import './globals.css'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { Providers } from '@/app/providers'
import { cookies } from 'next/headers'
import { API_BASE_URL } from '@/utils/constants'
import { UserDataPreloader } from '@/components/preloader/UserDataPreloader'

const font = Inter({
  subsets: ['cyrillic'],
  weight: ['400'],
})

export const metadata = {
  title: 'АГНИ - Автоматизация - Главная',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

interface RootLayoutProps {
  children?: ReactNode
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const token = cookies().get('token')?.value
  let userData

  if (token === undefined) {
    console.log('Не авторизован')
  }
  const res = await fetch(`${API_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (res.status === 401) {
    userData = null
  } else {
    userData = await res.json()
  }

  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <>
            <UserDataPreloader data={userData} />
            {children}
          </>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
