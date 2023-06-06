import Image from 'next/image'

export const UserCard = () => {
  return (
    <div className='flex items-center gap-4 rounded-md border px-4 py-2 shadow-xl dark:border-drCurrentLine'>
      <Image
        src={'/male.png'}
        alt={'Avatar'}
        width={1000}
        height={1000}
        className='h-10 w-10 rounded-md'
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-sm'>
          Белоногов Никита Иванович
        </h1>
        <span className='rounded-md border px-2 py-1 text-xs dark:border-drCurrentLine'>
          Администратор
        </span>
      </div>
    </div>
  )
}
