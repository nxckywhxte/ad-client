export interface FormData {
  email?: string
  username?: string
  rawPassword?: string
  roleName?: string
}

export type AuthFormType = 'register' | 'login'
