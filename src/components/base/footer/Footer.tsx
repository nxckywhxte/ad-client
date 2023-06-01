import { Logo } from '@/components/base/logo/Logo'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='body-font'>
      <div className='container mx-auto flex flex-col items-center justify-between px-5 py-8 sm:flex-row'>
        <Logo
          iconHeight={40}
          iconWidth={40}
          title={'АГНИ - Автоматизация'}
          subtitle={'Кафедра Автоматизации и ИТ'}
        />
        <p className='mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4'>
          © 2023 АГНИ - Автоматизация —
          <Link
            href='https://github.com/nxckywhxte'
            className='ml-1 text-gray-600'
            rel='noopener noreferrer'
            target='_blank'>
            @nxckywhxte
          </Link>
        </p>
      </div>
    </footer>
  )
}
