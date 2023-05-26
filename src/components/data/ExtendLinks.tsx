import { LinksDataProps } from '@/components/base/link-list/data/links.data'
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'

let iconSize = 20
export const ExtendLinksData: LinksDataProps[] = [
  {
    id: 1,
    title: 'Официальный сайт АГНИ',
    href: '/',
    icon: (
      <GlobeEuropeAfricaIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
  {
    id: 2,
    title: 'Расписание занятий',
    href: '/',
    icon: (
      <GlobeEuropeAfricaIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
  {
    id: 3,
    title: 'ИСУ АГНИ',
    href: '/',
    icon: (
      <GlobeEuropeAfricaIcon
        width={iconSize}
        height={iconSize}
      />
    ),
  },
]