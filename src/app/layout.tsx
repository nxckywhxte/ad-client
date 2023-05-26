import './globals.css'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { Providers } from '@/app/providers'
import { BaseLayout } from '@/components/base/layout/BaseLayout'

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

const RootLayout: FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
