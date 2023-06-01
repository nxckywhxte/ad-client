import { BenefitsCardData } from './benefits-card.data'
import { BenefitsCard } from '@/components/sections/benefits/BenefitsCard'

export const BenefitsSection = () => {
  return (
    <section className='body-font'>
      <div className='container mx-auto px-5 py-10'>
        <div className='mb-10 flex w-full flex-col flex-wrap items-center text-center'>
          <h1 className='title-font mb-2 text-2xl font-medium sm:text-3xl'>
            <span className='text-drPurple'>
              Приемущества
            </span>{' '}
            и функционал нашего сайта
          </h1>
          <p className='w-full leading-relaxed lg:w-1/2'>
            Официальный сайт Кафедры Автоматизации
            и ИТ предлагает следующие приемущества
            и функционал:
          </p>
        </div>
        <div className='-m-4 flex flex-wrap'>
          {BenefitsCardData.map((data, idx) => (
            <BenefitsCard
              key={idx}
              title={data.title}
              description={data.description}
              icon={data.icon}
              note={data.note}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
