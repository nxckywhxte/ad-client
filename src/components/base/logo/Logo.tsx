import type { FC } from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

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
    <div className='flex items-center gap-3'>
      <div className='flex items-center justify-center'>
        <AcademicCapIcon
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <div className='flex flex-col justify-start'>
        <h1 className='text-xl'>{title}</h1>
        <span className='text-sm'>
          {subtitle}
        </span>
      </div>
    </div>
  )
}
