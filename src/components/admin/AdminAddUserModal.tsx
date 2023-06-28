import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { AdminAddUserForm } from '@/components/admin/AdminAddUserForm'

export const AdminAddUserModal = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className='flex items-center justify-center gap-2 rounded-md bg-drComment px-4 py-3 text-drForeground hover:bg-drComment/90 dark:hover:bg-drComment/20'
        onClick={openModal}>
        <PlusIcon className='h-6 w-6' />
        Добавить
      </button>
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
                <Dialog.Panel className='w-full max-w-7xl transform overflow-hidden rounded-2xl bg-drForeground p-6 text-left align-middle shadow-2xl transition-all dark:bg-drBackground'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 dark:text-drPurple'>
                    Добавление нового пользователя
                  </Dialog.Title>
                  <AdminAddUserForm />
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
