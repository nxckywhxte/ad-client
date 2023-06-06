'use client'

import { LinksDataProps } from '@/components/base/link-list/data/links.data'
import Link from 'next/link'

export const LinkList = ({
  data,
}: {
  data: LinksDataProps[]
}) => {
  return (
    <ul className='hidden lg:flex lg:items-center lg:gap-0 xl:gap-4'>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              className='px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple md:px-4 md:py-3'>
              {link.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
