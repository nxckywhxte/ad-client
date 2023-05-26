import type { FC } from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface LogoProps {
  title: string
  subtitle: string
  iconWidth: number
  iconHeight: number
}

export const Logo: FC<LogoProps> = ({
  iconWidth,
  iconHeight,
  subtitle,
  title,
}) => {
  return (
    <Link
      href='/'
      className='flex items-center gap-3 dark:hover:text-drPurple'>
      <div className='flex items-center justify-center'>
        <AcademicCapIcon
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <div className='flex flex-col justify-start'>
        <h1 className='text-base md:text-xl'>
          {title}
        </h1>
        <span className='text-xs md:text-sm'>
          {subtitle}
        </span>
      </div>
    </Link>
  )
}
