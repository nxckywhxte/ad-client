'use client'

import Link from 'next/link'
import { AsideLinkInterface } from '@/components/dashboard/aside-link-list/aside-link.interface'
import { useSession } from 'next-auth/react'

export const AsideLinkList = ({
  data,
}: {
  data: AsideLinkInterface[]
}) => {
  const { data: session } = useSession()

  return (
    <ul className='flex flex-col gap-4'>
      {data.map(link => {
        if (
          link.role.includes({
            id: session?.user.role.id,
            roleName: session?.user.role.name,
          })
        )
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className='flex items-center gap-4 px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple md:px-4 md:py-3'>
                <>{link.icon}</>
                {link.title}
              </Link>
            </li>
          )
      })}
    </ul>
  )
}
