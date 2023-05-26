import { FC, ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outlined'
  children?: ReactNode
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  onClick,
}) => {
  switch (variant) {
    case 'primary':
      return (
        <button
          onClick={onClick}
          className='rounded-md bg-drComment px-4 py-2 text-sm text-drForeground hover:bg-drComment/95'>
          {children}
        </button>
      )
    case 'secondary':
      return (
        <button
          onClick={onClick}
          className='rounded-md bg-drCurrentLine px-4 py-2 text-sm text-drForeground hover:bg-drCurrentLine/75'>
          {children}
        </button>
      )
    case 'outlined':
      return (
        <button
          onClick={onClick}
          className='rounded-md border-2 border-drComment bg-transparent px-4 py-2 text-sm text-drForeground hover:bg-drComment'>
          {children}
        </button>
      )
  }
}
