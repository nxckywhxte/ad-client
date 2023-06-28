import { FC, ReactNode } from 'react'

export const metadata = {
  title: 'АГНИ - Автоматизация - Авторизация',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

interface AuthRootLayoutProps {
  children?: ReactNode
}

const AuthRootLayout: FC<AuthRootLayoutProps> = ({ children }) => {
  return <div suppressHydrationWarning>{children}</div>
}

export default AuthRootLayout
