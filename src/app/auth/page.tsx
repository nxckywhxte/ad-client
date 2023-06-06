import { AuthSection } from '@/components/sections/auth/AuthSection'
import { AuthBaseLayout } from '@/components/base/layout/AuthBaseLayout'

export default function AuthPage() {
  return (
    <AuthBaseLayout>
      <AuthSection />
    </AuthBaseLayout>
  )
}
