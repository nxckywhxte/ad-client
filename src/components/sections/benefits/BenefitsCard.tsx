import { FC } from 'react'
import { BenefitsCardProps } from '@/components/sections/benefits/benifits-card.interface'

export const BenefitsCard: FC<
  BenefitsCardProps
> = ({ icon, title, description, note }) => {
  return (
    <div className='w-full p-4 md:w-1/2 xl:w-1/3'>
      <div className='w-full rounded-md border p-6 shadow-xl dark:border-drCurrentLine'>
        <div className='mb-4 inline-flex w-full items-center justify-between text-drPurple'>
          <div>{icon}</div>
          <div className='flex items-center'>
            <span className='rounded-md border px-2 py-1 text-xs dark:border-drCurrentLine'>
              {note}
            </span>
          </div>
        </div>
        <h2 className='title-font mb-2 text-lg font-medium'>
          {title}
        </h2>
        <p className='text-base leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  )
}
