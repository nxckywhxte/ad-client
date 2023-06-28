import { FC } from 'react'

interface FormButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const FormButton: FC<FormButtonProps> = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='my-6 w-1/3 rounded-md bg-drComment px-4 py-2 disabled:bg-drComment/30'>
      {label}
    </button>
  )
}
