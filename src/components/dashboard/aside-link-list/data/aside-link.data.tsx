import { HomeIcon } from '@heroicons/react/24/outline'
import { AsideLinkInterface } from '@/components/dashboard/aside-link-list/aside-link.interface'

let iconSize = 20
export const asideLinkData: AsideLinkInterface[] =
  [
    {
      id: 1,
      icon: (
        <HomeIcon
          width={iconSize}
          height={iconSize}
        />
      ),
      title: 'Панель управления',
      href: '/dashboard',
      role: [
        {
          roleName: 'Администратор',
        },
        {
          roleName: 'Студент',
        },
        {
          roleName: 'Преподаватель',
        },
      ],
    },
    {
      id: 2,
      icon: (
        <HomeIcon
          width={iconSize}
          height={iconSize}
        />
      ),
      title: 'Студенты',
      href: '/dashboard/student',
      role: [
        {
          roleName: 'Администратор',
        },
        {
          roleName: 'Преподаватель',
        },
      ],
    },
    {
      id: 3,
      icon: (
        <HomeIcon
          width={iconSize}
          height={iconSize}
        />
      ),
      title: 'Преподаватели',
      href: '/dashboard/teacher',
      role: [
        {
          roleName: 'Администратор',
        },
        {
          roleName: 'Преподаватель',
        },
      ],
    },
    {
      id: 4,
      icon: (
        <HomeIcon
          width={iconSize}
          height={iconSize}
        />
      ),
      title: 'Тестирование',
      href: '/dashboard/test',
      role: [
        {
          roleName: 'Администратор',
        },
        {
          roleName: 'Преподаватель',
        },
        {
          roleName: 'Студент',
        },
      ],
    },
    {
      id: 5,
      icon: (
        <HomeIcon
          width={iconSize}
          height={iconSize}
        />
      ),
      title: 'Каталог',
      href: '/dashboard/catalog',
      role: [
        {
          roleName: 'Администратор',
        },
        {
          roleName: 'Студент',
        },
      ],
    },
  ]
