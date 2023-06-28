import { FC } from 'react'
import { PlusIcon, ArrowPathIcon, TrashIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

type ActionButtonProps = {
  isize: number
  title: string
  action: 'delete' | 'add' | 'update'
  className?: string
  onClick?: () => void
}

export const ActionButton: FC<ActionButtonProps> = ({
  onClick,
  className,
  action,
  title,
  isize,
}) => {
  const base =
    'flex items-center rounded-md px-2 gap-4 py-2 md:px-4 md:py-3 border dark:border-drCurrentLine w-full flex-start dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple hover:bg-drCurrentLine/10'
  switch (action) {
    case 'add':
      return (
        <button className={twMerge(base, className)} onClick={onClick}>
          <PlusIcon width={isize} height={isize} />
          <span className='hidden md:block'>{title}</span>
        </button>
      )
    case 'update':
      return (
        <button className={twMerge(base, className)} onClick={onClick}>
          <ArrowPathIcon width={isize} height={isize} />
          <span className='hidden md:block'>{title}</span>
        </button>
      )
    case 'delete':
      return (
        <button className={twMerge(base, className)} onClick={onClick}>
          <TrashIcon width={isize} height={isize} />
          <span className='hidden md:block'>{title}</span>
        </button>
      )
  }
}
