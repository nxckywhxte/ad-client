export interface UserRole {
  id: string
  name: string
}

export interface FilteredUser {
  id: string
  username: string
  email: string
  role: UserRole
}
