import { Logo } from '@/components/base/logo/Logo'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1>Привет мир</h1>
      <Logo
        title='АГНИ - Автоматизация'
        subtitle='Кафедра Автоматизации и ИТ'
        iconHeight={40}
        iconWidth={40}
      />
    </main>
  )
}
