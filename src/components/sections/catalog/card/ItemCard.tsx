import Image from 'next/image'

export const ItemCard = ({ item, openModal }) => {
  return (
    <div
      className='rounded-md border p-4 shadow-xl hover:cursor-pointer dark:border-drCurrentLine md:w-1/2 xl:w-1/4'
      onClick={() => openModal({ item })}>
      <div className='rounded-md p-2 md:p-3 lg:p-4'>
        <Image
          className='mb-6 h-80 rounded-md object-cover object-center'
          width={400}
          height={400}
          src={item.imageUrl}
          alt='content'
        />
        <h2 className='title-font mb-4 text-lg font-medium'>
          {item.title}
        </h2>
      </div>
    </div>
  )
}
