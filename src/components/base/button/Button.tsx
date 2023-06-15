'use client'

import { FC, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outlined'
  children?: ReactNode
  onClick?: () => void
  href: string
}

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  href,
}) => {
  switch (variant) {
    case 'primary':
      return (
        <Link
          href={href}
          onClick={onClick}
          className='rounded-md bg-drComment px-4 py-2 text-drForeground hover:bg-drComment/95'>
          {children}
        </Link>
      )
    case 'secondary':
      return (
        <Link
          href={href}
          onClick={onClick}
          className='rounded-md bg-drCurrentLine px-4 py-2 text-drForeground hover:bg-drCurrentLine/75'>
          {children}
        </Link>
      )
    case 'outlined':
      return (
        <Link
          href={href}
          onClick={onClick}
          className='rounded-md border-2 border-drComment bg-transparent px-4 py-2 text-sm text-drForeground hover:bg-drComment'>
          {children}
        </Link>
      )
  }
}
