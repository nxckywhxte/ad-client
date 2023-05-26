import { FC, ReactNode } from 'react'

interface GroupProps {
  children?: ReactNode | ReactNode[]
}

export const Group: FC<GroupProps> = ({
  children,
}) => {
  return (
    <div className='hidden sm:flex sm:items-center sm:gap-4'>
      {children}
    </div>
  )
}
