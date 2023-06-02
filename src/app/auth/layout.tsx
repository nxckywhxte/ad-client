import { FC, ReactNode } from 'react'
import '../globals.css'

export const metadata = {
  title: 'АГНИ - Автоматизация - Авторизация',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

interface AuthRootLayoutProps {
  children?: ReactNode
}

const AuthRootLayout: FC<AuthRootLayoutProps> = ({
  children,
}) => {
  return <>{children}</>
}

export default AuthRootLayout
