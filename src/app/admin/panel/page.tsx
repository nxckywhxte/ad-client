import { API_BASE_URL } from '@/utils/constants'
import { cookies } from 'next/headers'
import { UserResponse } from '@/types/form'
import { UserList } from '@/components/admin/UserList'
import { Clock } from '@/components/admin/Clock'

const AdminPage = async () => {
  const token = cookies().get('token')?.value
  const res = await fetch(`${API_BASE_URL}/admin/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const allUsers: UserResponse[] = await res.json()
  return (
    <div>
      <Clock />
      <UserList data={allUsers} token={token} />
    </div>
  )
}

export default AdminPage
