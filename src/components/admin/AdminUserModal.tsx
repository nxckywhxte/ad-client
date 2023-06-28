'use client'

import React, { FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { UserResponse } from '@/types/form'
import { removeOnSubmit } from '@/utils/functions/form'

type AdminUserModalProps = {
  user: UserResponse
  token: string | undefined
}
export const AdminUserModal: FC<AdminUserModalProps> = ({ user, token }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className='flex cursor-pointer items-center justify-center'
        onClick={openModal}>
        <div className='w-full rounded-md border p-6 shadow-xl dark:border-drCurrentLine'>
          <div className='mb-4 inline-flex w-full items-center justify-between text-drPurple'>
            <div>@{user.username}</div>
            <div className='flex items-center'>
              {user.roles.map(role => (
                <span
                  className='rounded-md border px-2 py-1 text-xs dark:border-drCurrentLine'
                  key={role.id}>
                  {role.name}
                </span>
              ))}
            </div>
          </div>
          <div className='flex w-full items-center gap-4'>
            <div className='h-20 w-20 overflow-hidden rounded-full'>
              <Image
                className='h-20 w-20 overflow-hidden rounded-full object-cover'
                src={`http://localhost:1010/api/v1/users/get-icon/${user.id}.jpg`}
                width={300}
                height={300}
                alt={'user photo'}
              />
            </div>
            <div className='flex w-full flex-col'>
              <h2 className='title-font mb-2 text-lg font-medium'>
                {user?.profile?.lastName} {user?.profile?.firstName}{' '}
                {user?.profile?.patronymic}
              </h2>
              <span>Пол: {user?.profile?.gender}</span>
              <span>Номер телефона: {user?.profile?.phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-drForeground p-6 text-left align-middle shadow-2xl transition-all dark:bg-drBackground'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 dark:text-drPurple'>
                    {user.profile.lastName} {user.profile.firstName}{' '}
                    {user.profile.patronymic}
                  </Dialog.Title>
                  <div className='mt-4 flex w-full items-center justify-between'>
                    <h1 className='text-sm lg:text-base'>Удаление акканута</h1>
                    <button
                      onClick={() => removeOnSubmit(user.id, token)}
                      className='rounded-md bg-drRed px-4 py-2 text-sm hover:bg-drRed/50 lg:text-base'>
                      Удалить
                    </button>
                  </div>
                  <div className='mt-4 flex w-full items-center justify-between'>
                    <h1 className='text-sm lg:text-base'>Изменение профиля</h1>
                    <button className='rounded-md bg-drOrange px-4 py-2 text-sm text-drBackground hover:bg-drOrange/50 lg:text-base'>
                      Изменить
                    </button>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-drComment px-4 py-2 text-sm font-medium text-drForeground  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Закрыть
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
