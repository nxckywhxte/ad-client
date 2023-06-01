import {
  BookOpenIcon,
  ComputerDesktopIcon,
  HomeIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

export interface LinksDataProps {
  id: number
  href: string
  title: string
  icon?: ReactNode
}

let iconSize = 20
export const LinksData: LinksDataProps[] = [
  {
    id: 1,
    title: 'Главная',
    href: '/',
    icon: (
      <HomeIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
  {
    id: 2,
    title: 'Наша кафедра',
    href: '/department',
    icon: (
      <BookOpenIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
  {
    id: 3,
    title: 'Каталог',
    href: '/',
    icon: (
      <RectangleStackIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
  {
    id: 4,
    title: 'Панель управления',
    href: '/',
    icon: (
      <ComputerDesktopIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
]
