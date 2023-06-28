import { IAuthForm } from '@/types/form'
import { Gender } from '@/types/gender'

export const defaultAuthFormValues: IAuthForm = {
  //login & register
  email: '',
  username: '',
  rawPassword: '',
  roleName: '',
  //profile
  lastName: '',
  firstName: '',
  patronymic: '',
  gender: Gender.male,
  birthday: new Date(),
  phoneNumber: '',
  avatarFile: new Blob(),
}
