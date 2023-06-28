import Image from 'next/image'
import { ActionButton } from '@/components/base/button/ActionButton'
import { FC } from 'react'

type CardProps = {
  userData: {
    avatarUrl: string
    fullName: string
    email: string
  }
}
export const Card: FC<CardProps> = ({ userData }) => {
  return (
    <div className='flex h-full w-full items-center justify-between gap-4 rounded-md border p-4 shadow-xl dark:border-drCurrentLine'>
      <div className='flex flex-col gap-4 md:flex-row md:items-center'>
        <Image
          priority
          className='h-20 w-20 rounded-full'
          src={userData.avatarUrl}
          alt={'avatar'}
          width={1000}
          height={1000}
        />
        <div className='flex flex-col'>
          <h1 className='text-sm md:text-lg'>{userData.fullName}</h1>
          <span className='text-xs md:text-base'>{userData.email}</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ActionButton title={'Добавить'} action={'add'} isize={20} />
        <ActionButton title={'Обновить'} action={'update'} isize={20} />
        <ActionButton title={'Удалить'} action={'delete'} isize={20} />
      </div>
    </div>
  )
}
