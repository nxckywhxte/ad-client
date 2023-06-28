'use client'

import { FC, PropsWithChildren } from 'react'
import { ThemeSwitch } from '@/components/base/theme/ThemeSwitch'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { AsideLinkList } from '@/components/dashboard/aside-link-list/AsideLinkList'
import { asideLinkData } from '@/components/dashboard/aside-link-list/data/aside-link.data'

export const DashboardBaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-full'>
      <div className='hidden w-full md:flex md:w-3/5 lg:w-2/5 xl:w-1/4'>
        <aside className='m-4 hidden h-screen min-h-max w-full flex-col items-center rounded-md border p-4 dark:border-drCurrentLine md:sticky md:flex'>
          <div className='flex w-full items-center justify-center gap-2'>
            <AcademicCapIcon height={40} width={40} />
            <div className='flex flex-col'>
              <h1 className='text-xl'>АГНИ - Автоматизация</h1>
              <span className=''>Панель управления</span>
            </div>
          </div>
          <div className='mt-4 h-1 w-full rounded-md bg-drPurple px-10'></div>
          <div className='mt-4 flex-1'>
            <AsideLinkList data={asideLinkData} />
          </div>
        </aside>
      </div>
      <div className='m-4 min-h-screen w-full'>
        <>
          <nav className='flex w-full items-center justify-between rounded-md border px-4 py-2 dark:border-drCurrentLine'>
            <ThemeSwitch iconWidth={30} iconHeight={30} />
          </nav>
        </>
        <main className='flex flex-col py-6'>{children}</main>
      </div>
    </div>
  )
}
