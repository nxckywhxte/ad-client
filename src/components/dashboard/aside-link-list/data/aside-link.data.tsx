import {
  FireIcon,
  FolderIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { AsideLinkInterface } from '@/components/dashboard/aside-link-list/aside-link.interface'

let iconSize = 20
export const asideLinkData: AsideLinkInterface[] = [
  {
    id: 1,
    icon: <Squares2X2Icon width={iconSize} height={iconSize} />,
    title: 'Панель управления',
    href: '/admin/panel',
  },
  {
    id: 2,
    icon: <UsersIcon width={iconSize} height={iconSize} />,
    title: 'Студенты',
    href: '/admin/panel/student',
  },
  {
    id: 3,
    icon: <UserGroupIcon width={iconSize} height={iconSize} />,
    title: 'Преподаватели',
    href: '/admin/panel/teacher',
  },
  {
    id: 4,
    icon: <FireIcon width={iconSize} height={iconSize} />,
    title: 'Тестирование',
    href: '/admin/panel/test',
  },
  {
    id: 5,
    icon: <FolderIcon width={iconSize} height={iconSize} />,
    title: 'Каталог',
    href: '/admin/panel/catalog',
  },
]
