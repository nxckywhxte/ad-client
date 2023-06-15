'use client'

import { Logo } from '@/components/base/logo/Logo'
import { ThemeSwitch } from '@/components/base/theme/ThemeSwitch'
import { Button } from '@/components/base/button/Button'
import { Group } from '@/components/base/group/Group'
import { LinkList } from '@/components/base/link-list/LinkList'
import { unauthLinksData } from '@/components/base/link-list/data/links.data'
import { MobileMenu } from '@/components/base/mobile-menu/MobileMenu'
import { ExtendLinksData } from '@/components/data/ExtendLinks'

export const BaseNavigationBar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-4 py-3 shadow-md'>
      <Logo
        title='АГНИ - Автоматизация'
        subtitle='Кафедра Автоматизации и ИТ'
        iconHeight={40}
        iconWidth={40}
      />
      <LinkList data={unauthLinksData} />
      <Group>
        <ThemeSwitch
          iconWidth={30}
          iconHeight={30}
        />

        <Button
          variant={'primary'}
          href={'/auth'}>
          Авторизация
        </Button>
      </Group>
      <MobileMenu
        iconSize={30}
        centerLinks={unauthLinksData}
        extendLinks={ExtendLinksData}
      />
    </nav>
  )
}
