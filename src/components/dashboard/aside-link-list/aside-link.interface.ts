import { ReactNode } from 'react'

export interface AsideLinkInterface {
  id: number
  href: string
  title: string
  icon?: ReactNode
  role: AsideLinkRoleInterface[]
}

export interface AsideLinkRoleInterface {
  roleName: string | undefined
}
