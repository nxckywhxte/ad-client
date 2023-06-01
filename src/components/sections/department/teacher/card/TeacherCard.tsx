import Image from 'next/image'
import { FC } from 'react'
import { TeacherCardInterface } from '@/components/sections/department/teacher/card/teacher-card.interface'

export const TeacherCard: FC<
  TeacherCardInterface
> = ({ imageUrl, position, fullName }) => {
  return (
    <div className='rounded-md border p-4 shadow-xl dark:border-drCurrentLine md:w-1/2 xl:w-1/4'>
      <div className='rounded-md p-2 md:p-3 lg:p-4'>
        <Image
          className='mb-6 h-80 rounded-md object-fill object-center'
          width={400}
          height={400}
          src={imageUrl}
          alt='content'
        />
        <h3 className='title-font text-xs font-medium tracking-widest text-indigo-500'>
          {position}
        </h3>
        <h2 className='title-font mb-4 text-lg font-medium'>
          {fullName}
        </h2>
      </div>
    </div>
  )
}
