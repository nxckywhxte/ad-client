import Image from 'next/image'

export const DepartmentHistorySection = () => {
  return (
    <section className='body-font'>
      <div className='container mx-auto px-5 py-10'>
        <div className='mb-6 w-full lg:mb-0 lg:w-1/2'>
          <h1 className='title-font mb-2 text-3xl font-medium uppercase sm:text-4xl'>
            Коротко о главном / История кафедры
          </h1>
          <div className='h-1 w-36 rounded bg-drPurple'></div>
        </div>
        <div className='flex flex-col md:my-12'>
          <div className='flex w-full flex-col items-center justify-between p-4 sm:gap-10 lg:flex-row'>
            <div className='flex-1'>
              <h2 className='title-font mb-4 text-2xl font-medium sm:text-3xl md:mt-4'>
                Кафедра автоматизации и
                информационных технологий (АИТ) в
                составе АГНИ была открыта в 1993г.
              </h2>
              <p className='mb-8 leading-relaxed'>
                Первые дни работы коллектив
                кафедры состоял всего из 4 человек
                – зав. кафедрой Габдуллина Т.Г.,
                ст. преподавателя Богданова Х.У.,
                ассистента Ященко Б.А. и лаборанта
                Анохиной Е.С. В настоящее время на
                кафедре работают 20 штатных ППС,
                совместителей и сотрудников.
              </p>
            </div>
            <div className='flex w-full flex-1 items-center justify-end gap-4'>
              <Image
                className='mb-6 h-72 rounded-md object-fill object-center shadow-xl sm:mb-0 sm:h-[400px]'
                width={1400}
                height={1400}
                src='/kafedra.jpg'
                alt='content'
              />
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-between p-4 sm:gap-10 lg:flex-row-reverse'>
            <div className='flex-1'>
              <h2 className='title-font text-2xl font-medium sm:text-3xl md:mb-4 md:mt-4'>
                С 1993 по 2012гг. до выхода на
                пенсию кафедру возглавлял
                Габдуллин Тимерхатмулла
                Габдуллович
              </h2>
              <p className='mb-8 leading-relaxed'>
                Габдуллин Тимерхатмулла
                Габдуллович - доктор технических
                наук, профессор, действительный
                член Международной Академии
                информатизации при ООН,
                заслуженный изобретатель
                Российской Федерации и Республики
                Башкортостан, автор более 130
                патентов и изобретений, первый
                лауреат премии научно-технического
                конкурса им. акад. И.М. Губкина.
              </p>
            </div>
            <div className='flex w-full flex-1 items-center justify-start'>
              <Image
                className='mb-6 h-80 w-80 rounded-md object-fill object-center shadow-xl sm:mb-0'
                width={1400}
                height={1400}
                src='/gabdullin.png'
                alt='content'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
