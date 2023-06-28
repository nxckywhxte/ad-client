import Image from 'next/image'
import { AuthForm } from '@/components/base/form/AuthForm'

export const AuthSection = () => {
  return (
    <section className='mt-10 flex min-h-screen w-full flex-col items-center justify-center'>
      <div className='mb-6 flex w-full flex-col items-center justify-center px-4 lg:mb-0'>
        <h1 className='title-font mb-6 text-center text-3xl font-medium uppercase sm:text-4xl lg:w-2/4'>
          Добро пожаловать на{' '}
          <span className='text-drPurple'>официальный сайт</span> кафедры
          Автоматизации и ИТ
        </h1>
        <div className='h-1 w-72 rounded bg-drPurple'></div>
        <span className='mt-10 text-center text-xl sm:text-2xl'>
          Для продолжения, авторизуйтесь или зарегистрируйтесь
        </span>
      </div>
      <div className='flex w-full flex-1 flex-col items-center md:justify-center lg:flex-row'>
        <div className='hidden flex-1 lg:flex'>
          <Image
            priority={true}
            src={'/work and chill-01-602b.svg'}
            alt={'auth logo'}
            width={1000}
            height={1000}
            className=''
          />
        </div>
        <div className='w-full px-6 md:flex-1'>
          <AuthForm />
        </div>
      </div>
    </section>
  )
}
