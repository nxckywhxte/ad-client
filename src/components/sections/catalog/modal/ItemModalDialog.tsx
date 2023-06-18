import { Dialog } from '@headlessui/react'
import Image from 'next/image'

export const ItemModalDialog = ({
  isOpen,
  setIsOpen,
  item,
}) => {
  return item ? (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-75'>
        <Dialog.Panel className='flex w-3/4 flex-row rounded p-8 dark:bg-drBackground'>
          <Image
            className='mr-6 h-80 rounded-md object-cover object-center'
            width={400}
            height={400}
            src={item.imageUrl}
            alt='content'
          />
          <div className='flex-col'>
            <Dialog.Title className='text-xl'>
              {item.title}
            </Dialog.Title>
            <Dialog.Description>
              Какое-то описание
            </Dialog.Description>
            <button
              className='mr-2 mt-2 rounded-md bg-drComment px-4 py-2 text-drForeground hover:bg-drComment/95'
              onClick={() => setIsOpen(false)}>
              Кнопка
            </button>
            <button
              className='rounded-md bg-drComment px-4 py-2 text-drForeground hover:bg-drComment/95'
              onClick={() => setIsOpen(false)}>
              Еще кнопка
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  ) : null
}
