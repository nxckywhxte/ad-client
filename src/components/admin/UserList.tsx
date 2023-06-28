'use client'
import { UserResponse } from '@/types/form'
import React, { FC } from 'react'
import { AdminUserModal } from '@/components/admin/AdminUserModal'
import { AdminAddUserModal } from '@/components/admin/AdminAddUserModal'

type UserListProps = {
  data: UserResponse[]
  token: string | undefined
}

export const UserList: FC<UserListProps> = ({ data, token }) => {
  return (
    <div className='w-full'>
      <div className='mb-6 flex w-full items-center justify-between'>
        <h1 className='text-lg md:text-xl'>Список пользователей</h1>
        <AdminAddUserModal />
      </div>

      <div className='grid grid-cols-1 gap-4  lg:grid-cols-2'>
        {!data ? (
          <div>
            <span>Список пока пуст</span>
          </div>
        ) : (
          data.map(user => (
            <div className='' key={user.id}>
              <AdminUserModal user={user} token={token} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
