import { UserResponse } from '@/types/form'
import { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { handleLogout } from '@/utils/functions/user'
import {
  ArrowDownIcon,
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useAuthStore } from '@/store/auth'
import { API_IMAGES_URL } from '@/utils/constants'

type UserMenuProps = {
  data: UserResponse
  iconSize: number
}

export const UserMenu: FC<UserMenuProps> = ({ data, iconSize }) => {
  const userData = useAuthStore(state => state.userData)

  return (
    <>
      <Menu
        as='div'
        className='relative inline-block rounded-md border px-3 py-1 dark:border-drCurrentLine dark:hover:bg-drComment/30'>
        <Menu.Button className='flex items-center justify-between gap-4 px-2 py-2'>
          <div className='w-full'>
            <Image
              width={1000}
              height={1000}
              src={`${API_IMAGES_URL}/${userData?.id}.jpg`}
              alt={data.username}
              className='h-10 w-10 overflow-hidden rounded-full object-cover'
            />
          </div>
          <div className='flex w-full flex-col items-start'>
            <h1 className='text-sm'>{data.email}</h1>
            {data.roles.map(role => (
              <span key={role.id} className='text-xs'>
                {role.name}
              </span>
            ))}
          </div>
          <div>
            <ArrowDownIcon width={iconSize} height={iconSize} />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-2 mt-5 flex w-[300px] origin-top-right flex-col items-start rounded-md bg-drForeground shadow-2xl dark:bg-drCurrentLine'>
            <div className='ml-8 mt-4 flex px-4 py-4'>
              <Menu.Item>
                <div className='flex flex-col items-center gap-2'>
                  <h1 className='text-lg'>Меню пользователя</h1>
                  <div className='h-1 w-full rounded-md border dark:border-drCurrentLine dark:bg-drComment'></div>
                </div>
              </Menu.Item>
            </div>
            <div className='ml-8 flex flex-col items-start gap-2 px-4'>
              <Menu.Item>
                <Link
                  href={
                    userData?.roles.some(role => role.name === 'Администратор')
                      ? '/admin/panel'
                      : '/panel'
                  }
                  className='flex items-center gap-2 py-2 dark:hover:text-drPurple'>
                  <ComputerDesktopIcon className='h-5 w-5' />
                  {userData?.roles.some(role => role.name === 'Администратор')
                    ? 'Панель администратора'
                    : 'Панель управления'}
                </Link>
              </Menu.Item>
            </div>
            <div className='ml-8 flex flex-col items-start gap-2 px-4'>
              <Menu.Item>
                <Link
                  href={`/profile/${userData?.id}`}
                  className='flex items-center gap-2 py-2 dark:hover:text-drPurple'>
                  <UserIcon className='h-5 w-5' />
                  Профиль
                </Link>
              </Menu.Item>
            </div>
            <div className='mb-8 ml-8 flex flex-col items-start gap-2 px-4 pt-8'>
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className='rounded-md bg-drComment px-4 py-2 text-drForeground'>
                  Выйти
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
