import { FC, ReactNode } from 'react'
import { DashboardBaseLayout } from '@/components/base/layout/DashboardBaseLayout'

export const metadata = {
  title:
    'АГНИ - Автоматизация - Панель управления',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

interface DashboardRootLayoutProps {
  children?: ReactNode
}

const DashboardRootLayout: FC<
  DashboardRootLayoutProps
> = ({ children }) => {
  return (
    <DashboardBaseLayout>
      {children}
    </DashboardBaseLayout>
  )
}

export default DashboardRootLayout
