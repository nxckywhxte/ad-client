import { teacherCardData } from '@/components/sections/department/teacher/card/teacher-card.data'
import { TeacherCard } from '@/components/sections/department/teacher/card/TeacherCard'

export const TeacherList = () => {
  return (
    <div className='m-4 flex flex-wrap justify-center gap-4'>
      {teacherCardData.map((teacher, idx) => (
        <TeacherCard
          key={idx}
          imageUrl={teacher.imageUrl}
          fullName={teacher.fullName}
          position={teacher.position}
          shortInfo={teacher.shortInfo}
        />
      ))}
    </div>
  )
}
