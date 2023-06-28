import { Gender } from '@/types/gender'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IRole } from '@/types/role'
import { IProfile } from '@/types/user'

export type AuthFormType = number

export interface ILoginStepAuthForm {
  username: string
  rawPassword: string
}

export interface IProfileStepAuthForm {
  lastName: string
  firstName: string
  patronymic: string
  gender: Gender
  phoneNumber: string
  birthday: Date
  avatarFile: FileList | null
}

export interface IRegisterStepAuthForm extends ILoginStepAuthForm {
  email: string
  roleName: string
}

export interface IAuthForm
  extends IProfileStepAuthForm,
    ILoginStepAuthForm,
    IRegisterStepAuthForm {}

export interface FormStep {
  register: UseFormRegister<IAuthForm>
  errors: FieldErrors<IAuthForm>
}

export interface RegisterFormStep extends FormStep {
  rolesFromServer?: IRole[]
}

export type UserResponse = {
  id: string
  username: string
  email: string
  profile: IProfile
  roles: IRole[]
  groups: IGroup[]
  access_token: string
  refresh_token: string
}

export interface IGroup {
  id: string
  name: string
}
