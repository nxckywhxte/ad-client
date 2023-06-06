import { Logo } from '@/components/base/logo/Logo'
import { LinksData } from '@/components/base/link-list/data/links.data'
import { Group } from '@/components/base/group/Group'
import { ThemeSwitch } from '@/components/base/theme/ThemeSwitch'
import { MobileMenu } from '@/components/base/mobile-menu/MobileMenu'
import { ExtendLinksData } from '@/components/data/ExtendLinks'
import { LinkList } from '@/components/base/link-list/LinkList'

export const AuthNavigationBar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-4 py-3 shadow-md'>
      <Logo
        title='АГНИ - Автоматизация'
        subtitle='Кафедра Автоматизации и ИТ'
        iconHeight={40}
        iconWidth={40}
      />
      <LinkList data={LinksData} />
      <Group>
        <ThemeSwitch
          iconWidth={30}
          iconHeight={30}
        />
      </Group>
      <MobileMenu
        iconSize={30}
        centerLinks={LinksData}
        extendLinks={ExtendLinksData}
      />
    </nav>
  )
}
