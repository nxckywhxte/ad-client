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
export const authLinksData: LinksDataProps[] = [
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
    href: '/catalog',
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
    href: '/dashboard',
    icon: (
      <ComputerDesktopIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
]

// export const unauthLinksData: LinksDataProps[] = [
//   {
//     id: 1,
//     title: 'Главная',
//     href: '/',
//     icon: (
//       <HomeIcon
//         width={iconSize}
//         height={iconSize}
//       />
//     ),
//   },
//   {
//     id: 2,
//     title: 'Наша кафедра',
//     href: '/department',
//     icon: (
//       <BookOpenIcon
//         width={iconSize}
//         height={iconSize}
//       />
//     ),
//   },
//   {
//     id: 3,
//     title: 'Каталог',
//     href: '/catalog',
//     icon: (
//       <RectangleStackIcon
//         width={iconSize}
//         height={iconSize}
//       />
//     ),
//   },
// ]
export const unauthLinksData =
  authLinksData.slice(0, authLinksData.length - 1)
