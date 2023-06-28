'use client'
import { FC } from 'react'
import { UserResponse } from '@/types/form'
import Image from 'next/image'
import { API_IMAGES_URL } from '@/utils/constants'
import { useAuthStore } from '@/store/auth'

type UserProfileProps = {
  data: UserResponse
  userId: string
}
export const UserProfile: FC<UserProfileProps> = ({ data, userId }) => {
  const userData = useAuthStore(state => state.userData)

  return (
    <div
      className={
        ' flex min-h-full w-full flex-col gap-y-4 p-4 lg:flex lg:flex-row lg:gap-4'
      }>
      <div className='flex h-full w-full flex-col items-center justify-center gap-6 rounded-md border-4 p-10 shadow-md dark:border-drCurrentLine lg:w-1/2'>
        <div className='mt-6 h-48 w-48 overflow-hidden rounded-full lg:h-64 lg:w-64'>
          <Image
            className='h-48 w-48 overflow-hidden rounded-full object-cover p-4 lg:h-64 lg:w-64'
            src={`${API_IMAGES_URL}/${data.id}.jpg`}
            alt={data.username}
            width={1000}
            height={1000}
          />
        </div>
        <h1 className='text-center text-xl lg:font-bold'>@{data.username}</h1>
        {data.roles.map(role => (
          <div
            key={role.id}
            className='rounded-md border px-4 py-3 dark:border-drCurrentLine dark:text-drPurple'>
            <span className='text-sm'>{role.name}</span>
          </div>
        ))}
        <div className='flex w-full flex-col items-start gap-2 p-4'>
          <h1 className='text-lg lg:text-xl'>
            Личная информация о пользователе
          </h1>
          <div className='h-1 w-full rounded-md bg-drPurple'></div>
          <p className='text-sm lg:text-base'>
            Фамилия: <span>{data.profile.lastName}</span>
          </p>
          <p className='text-sm lg:text-base'>
            Имя: <span>{data.profile.firstName}</span>
          </p>
          <p className='text-sm lg:text-base'>
            Отчество: <span>{data.profile.patronymic}</span>
          </p>
        </div>
        <div className='flex w-full flex-col items-start gap-2 p-4'>
          <h1 className='text-lg lg:text-xl'>Способы связи</h1>
          <div className='h-1 w-full rounded-md bg-drPurple'></div>
          <p className='text-sm lg:text-base'>
            Электронная почта: <span>{data.email}</span>
          </p>
          <p className='text-sm lg:text-base'>
            Номер телефона: <span>{data.profile.phoneNumber}</span>
          </p>
        </div>
      </div>
      <div className='flex h-full w-full flex-col gap-4 lg:w-1/2'>
        <div className='w-full flex-1 rounded-md border-4 shadow-md dark:border-drCurrentLine'>
          <div className='flex w-full flex-col items-start gap-2 p-4'>
            <h1 className='text-lg lg:text-xl'>
              Последние действия в каталоге
            </h1>
            <div className='h-1 w-full rounded-md bg-drPurple'></div>
            <p className='text-sm lg:text-base'>Пока пусто</p>
          </div>
        </div>
        {userData?.id === userId && (
          <div className='w-full flex-1 rounded-md border-4 shadow-md dark:border-drCurrentLine'>
            <div className='flex w-full flex-col items-start gap-2 p-4'>
              <h1 className='text-lg lg:text-xl'>Управление акканутом</h1>
              <div className='h-1 w-full rounded-md bg-drPurple'></div>
              <div className='mt-4 flex w-full items-center justify-between'>
                <h1 className='text-sm lg:text-base'>Удаление акканута</h1>
                <button className='rounded-md bg-drRed px-4 py-2 text-sm hover:bg-drRed/50 lg:text-base'>
                  Удалить
                </button>
              </div>
              <div className='mt-4 flex w-full items-center justify-between'>
                <h1 className='text-sm lg:text-base'>Изменение профиля</h1>
                <button className='rounded-md bg-drOrange px-4 py-2 text-sm text-drBackground hover:bg-drOrange/50 lg:text-base'>
                  Изменить
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='w-full flex-1 rounded-md border-4 shadow-md dark:border-drCurrentLine'>
          <div className='flex w-full flex-col items-start gap-2 p-4'>
            <h1 className='text-lg lg:text-xl'>Список комментариев</h1>
            <div className='h-1 w-full rounded-md bg-drPurple'></div>
            <div className={'mt-6 flex w-full items-center'}>
              <input className='w-full rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground' />
              <button className='ml-8 rounded-md bg-drRed px-4 py-2 text-sm hover:bg-drRed/50 lg:text-base'>
                Отправить
              </button>
            </div>
            <div className='max-h-[300px] w-full overflow-y-auto p-4'>
              <div className='mt-4 flex w-full items-center justify-between'>
                <div className='h-20 w-20 overflow-hidden rounded-full'>
                  <Image
                    className='h-20 w-20 overflow-hidden rounded-full object-cover p-4'
                    src={'/male.png'}
                    alt={'avatar'}
                    width={200}
                    height={200}
                  />
                </div>
                <p>Отличный отзыв о человеке. Общительный, спокойный</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
