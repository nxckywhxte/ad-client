'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { LinksDataProps } from '@/components/base/link-list/data/links.data'
import Link from 'next/link'
import { ThemeSwitch } from '@/components/base/theme/ThemeSwitch'
import { Button } from '@/components/base/button/Button'
import { useAuthStore } from '@/store/auth'
import Image from 'next/image'

export const MobileMenu = ({
  iconSize,
  centerLinks,
  extendLinks,
}: {
  iconSize: number
  centerLinks: LinksDataProps[]
  extendLinks: LinksDataProps[]
}) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const userData = useAuthStore(state => state.userData)

  return (
    <>
      <div className='sm:hidden'>
        <Menu as='div' className='relative inline-block'>
          <div>
            <Menu.Button className='flex items-center justify-center px-2 py-2'>
              <Bars3BottomLeftIcon
                width={iconSize}
                height={iconSize}
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-2 mt-1 flex w-[350px] origin-top-right flex-col items-start rounded-md bg-drForeground shadow-2xl dark:bg-drCurrentLine'>
              <div className='ml-8 mt-4 flex px-4 py-4'>
                <Menu.Item>
                  <div className='flex items-center gap-4'>
                    <h1>Навигация по сайту</h1>
                    <ThemeSwitch iconWidth={25} iconHeight={25} />
                  </div>
                </Menu.Item>
              </div>
              <div className='ml-8 flex flex-col items-start gap-2 px-4'>
                {centerLinks.map(link => (
                  <Menu.Item key={link.id}>
                    <Link
                      href={link.href}
                      className='flex items-center gap-2 px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple'>
                      {link.icon}
                      {link.title}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
              <div className='ml-8 px-4 py-4'>
                <Menu.Item>
                  <h1>Полезные ссылки</h1>
                </Menu.Item>
              </div>
              <div className='mb-8 ml-8 flex flex-col items-start gap-2 px-4'>
                {extendLinks.map(link => (
                  <Menu.Item key={link.id}>
                    <Link
                      href={link.href}
                      className='flex items-center gap-2 px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple'>
                      {link.icon}
                      {link.title}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
              <div className='mb-8 ml-8 flex flex-col items-start gap-2 px-4'>
                <Menu.Item>
                  <Button variant={'primary'} href={'/auth'}>
                    Авторизация
                  </Button>
                </Menu.Item>
              </div>
              {isAuthenticated ? (
                <div className='mb-8 ml-8 flex gap-2 px-4'>
                  <Menu.Item>
                    <Link href={'/'} className='hover:text-drPurple'>
                      <div className='flex w-full items-center gap-2'>
                        <div className='w-full'>
                          <Image
                            width={1000}
                            height={1000}
                            src={'/male.png'}
                            alt={'user photo'}
                            className='h-10 w-10 overflow-hidden rounded-md'
                          />
                        </div>
                        <div className='flex w-full flex-col items-start'>
                          <h1 className='text-sm'>{userData?.email}</h1>
                          {userData?.roles.map(role => (
                            <span key={role.id} className='text-xs'>
                              {role.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </Menu.Item>
                </div>
              ) : null}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}
