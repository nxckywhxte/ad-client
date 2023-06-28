'use client'

import { useEffect, useState } from 'react'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export const Clock = () => {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])
  return (
    <div className='mb-6 flex w-full items-center gap-4 rounded-md border p-4 shadow-md dark:border-drCurrentLine'>
      <div className='flex items-center gap-2'>
        <CalendarIcon className='h-6 w-6' />
        <p>
          {' '}
          {dateState.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <ClockIcon className='h-6 w-6' />
        <p>
          {dateState.toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </p>
      </div>
    </div>
  )
}
