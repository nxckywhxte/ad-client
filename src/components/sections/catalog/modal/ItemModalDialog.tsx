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
        <Dialog.Panel className='flex w-3/4 flex-row items-start rounded bg-drForeground p-8 dark:bg-drBackground'>
          <Image
            className='mr-6 h-80 shrink-0 grow-0 rounded-md object-cover object-center'
            width={400}
            height={400}
            src={item.imageUrl}
            alt='content'
          />
          <div className='relative shrink grow self-stretch'>
            <Dialog.Title className='text-xl'>
              {item.title}
            </Dialog.Title>
            <Dialog.Description className='py-2'>
              Какое-то описание
            </Dialog.Description>
            <div className='absolute bottom-0 flex flex-row'>
              <button
                className='mr-2 rounded-md bg-drComment px-4 py-2 text-drForeground hover:bg-drComment/95'
                onClick={() => setIsOpen(false)}>
                Кнопка
              </button>
              <button
                className='rounded-md bg-drComment px-4 py-2 text-drForeground hover:bg-drComment/95'
                onClick={() => setIsOpen(false)}>
                Еще кнопка
              </button>
            </div>
          </div>
          <button
            className="shrink-0 grow-0 bg-[url('/close-btn.svg')]"
            onClick={() => setIsOpen(false)}>
            Закрыть
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  ) : null
}
