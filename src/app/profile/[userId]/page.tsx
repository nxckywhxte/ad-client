import { UserProfile } from '@/components/UserProfile'
import { API_BASE_URL } from '@/utils/constants'
import { cookies } from 'next/headers'

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
  const token = cookies().get('token')?.value
  let userData
  const res = await fetch(`${API_BASE_URL}/users/${params.userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) {
    userData = null
  }
  userData = await res.json()
  return <UserProfile data={userData} userId={params.userId} />
}

export default ProfilePage
