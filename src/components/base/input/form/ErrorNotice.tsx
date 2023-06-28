import { FC } from 'react'

type ErrorNotice = {
  errorText: string | undefined
}

export const ErrorNotice: FC<ErrorNotice> = ({ errorText }) => {
  return (
    <p role='alert' className='text-sm text-drRed'>
      {errorText}
    </p>
  )
}
