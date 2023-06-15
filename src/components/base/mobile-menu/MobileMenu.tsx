'use client'

import { Fragment } from 'react'
import {
  Menu,
  Transition,
} from '@headlessui/react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { LinksDataProps } from '@/components/base/link-list/data/links.data'
import Link from 'next/link'
import { ThemeSwitch } from '@/components/base/theme/ThemeSwitch'
import { Button } from '@/components/base/button/Button'

export const MobileMenu = ({
  iconSize,
  centerLinks,
  extendLinks,
}: {
  iconSize: number
  centerLinks: LinksDataProps[]
  extendLinks: LinksDataProps[]
}) => {
  return (
    <>
      <div className='sm:hidden'>
        <Menu
          as='div'
          className='relative inline-block'>
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
                    <ThemeSwitch
                      iconWidth={25}
                      iconHeight={25}
                    />
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
                  <Button
                    variant={'primary'}
                    href={'/auth'}>
                    Авторизация
                  </Button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}
