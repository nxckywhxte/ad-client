import { TeacherList } from '@/components/sections/department/teacher/list/TeacherList'

export const TeacherInfoSection = () => {
  return (
    <section className='body-font'>
      <div className='container mx-auto px-5 py-10'>
        <div className='mb-20 flex w-full flex-wrap'>
          <div className='mb-6 w-full lg:mb-0 lg:w-1/2'>
            <h1 className='title-font mb-2 text-3xl font-medium uppercase sm:text-4xl'>
              Знакомьтесь, наш преподавательский
              состав
            </h1>
            <div className='h-1 w-36 rounded bg-drPurple'></div>
          </div>
          <p className='w-full leading-relaxed lg:w-1/2'>
            Кафедра автоматизации и информационных
            технологий (АИТ) в составе АГНИ была
            открыта в 1993г. после раздела кафедры
            автоматизации и электрификации горных
            работ на две самостоятельные кафедры:
            -автоматизации и информационных
            технологий; -электропривод и
            автоматика промышленных установок и
            технологических комплексов. Первые дни
            работы коллектив кафедры состоял всего
            из 4 человек – зав. кафедрой
            Габдуллина Т.Г., ст. преподавателя
            Богданова Х.У., ассистента Ященко Б.А.
            и лаборанта Анохиной Е.С. В настоящее
            время на кафедре работают 20 штатных
            ППС, совместителей и сотрудников.
          </p>
        </div>
        <TeacherList />
      </div>
    </section>
  )
}