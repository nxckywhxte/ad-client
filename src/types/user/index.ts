import { IRole } from '@/types/role'
import { IGroup } from '@/types/form'
import { Gender } from '@/types/gender'

export interface IProfile {
  lastName: string
  firstName: string
  patronymic: string
  gender: Gender
  phoneNumber: string
}

export interface IUser {
  id: string
  username: string
  email: string
  roles: IRole[]
  groups: IGroup[]
  profile: IProfile
}
