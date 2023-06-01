import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className='my-5 flex h-full w-full flex-col items-center justify-center'>
      <div className='flex w-full flex-col items-center px-4 py-4 lg:flex-row'>
        <div className='hidden lg:flex'>
          <Image
            src='/office party-6010.svg'
            width={800}
            height={800}
            alt='Hero img'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='flex flex-col items-center text-center text-2xl uppercase md:text-3xl lg:text-4xl'>
            Добро пожаловать на оффициальный сайт
            <span className='font-bold text-drComment dark:text-drPurple'>
              Кафедры Автоматизации И ИТ
            </span>
          </h1>
          <div className='my-4 flex flex-col items-center py-5 text-center font-light md:text-lg lg:text-xl'>
            <span>
              Присоединяйтесь к нашей большой
              семье, заводите новые знакомства и
              друзей.
            </span>
            <span>
              Получайте максимум новых знаний и
              оттачивайте навыки.
            </span>
            <span>
              Изучайте новые технологии в сфере
              Автоматизации технолонических
              процессов и производства вместе с
              нами!
            </span>
          </div>
          <div className='mt-4 flex flex-col items-center gap-4 text-lg text-drForeground md:flex-row'>
            <button className='rounded-md bg-drComment px-4 py-3'>
              Присоединиться
            </button>
            <button className='rounded-md bg-drCurrentLine px-4 py-3'>
              Свзяь с аднимистрацией
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
