import { TeacherInfoSection } from '@/components/sections/department/TeacherInfoSection'
import { DepartmentHistorySection } from '@/components/sections/department/history/DepartmentHistorySection'
import { BaseLayout } from '@/components/base/layout/BaseLayout'

export default function DepartmentPage() {
  return (
    <BaseLayout>
      <TeacherInfoSection />
      <DepartmentHistorySection />
    </BaseLayout>
  )
}
