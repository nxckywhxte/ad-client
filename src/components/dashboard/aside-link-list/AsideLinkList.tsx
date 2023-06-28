'use client'

import Link from 'next/link'
import { AsideLinkInterface } from '@/components/dashboard/aside-link-list/aside-link.interface'

export const AsideLinkList = ({ data }: { data: AsideLinkInterface[] }) => {
  return (
    <ul className='my-4 flex flex-col gap-4'>
      {data.map(link => (
        <li key={link.id}>
          <Link
            href={link.href}
            className='flex items-center gap-4 px-4 py-2 text-lg hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple md:px-4 md:py-3'>
            <>{link.icon}</>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
