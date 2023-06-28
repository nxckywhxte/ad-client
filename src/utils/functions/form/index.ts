import { IAuthForm, UserResponse } from '@/types/form'
import { Gender } from '@/types/gender'
import { API_BASE_URL } from '@/utils/constants'
import toast from 'react-hot-toast'
import { Dispatch, SetStateAction } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { setCookie } from 'nookies'

export const registerOnSubmit = async (
  data: IAuthForm,
  setFormType?: Dispatch<SetStateAction<number>>
) => {
  const newFormData = new FormData()
  if (data.avatarFile === undefined) return
  newFormData.append('avatarFile', data.avatarFile[0])
  newFormData.append(
    'createUser',
    new Blob(
      [
        JSON.stringify({
          email: data.email,
          username: data.username,
          rawPassword: data.rawPassword,
          roleName: data.roleName,
        }),
      ],
      {
        type: 'application/json',
      }
    )
  )
  newFormData.append(
    'createProfile',
    new Blob(
      [
        JSON.stringify({
          lastName: data.lastName,
          firstName: data.firstName,
          patronymic: data.patronymic,
          gender: Gender.male,
          phoneNumber: data.phoneNumber,
          birthday: data.birthday,
        }),
      ],
      {
        type: 'application/json',
      }
    )
  )
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    body: newFormData,
    method: 'POST',
  })
  console.log(res)
  if (!res.ok) {
    toast.error('Ошибка регистрации! Проверьте данные и повторите еще раз')
    return
  }
  toast.success('Успешная регистрация!')
  if (setFormType) {
    setFormType(3)
  }
}

export const loginOnSubmit = async (
  data: IAuthForm,
  router: AppRouterInstance
) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: data.username,
      rawPassword: data.rawPassword,
    }),
  })
  if (!res.ok) {
    if (res.status === 401)
      toast.error(
        'Неверные данные для входа! Проверьте данные и повторите еще раз'
      )
    else if (res.status === 403)
      toast.error('Ошибка доступа! Проверьте данные и повторите еще раз')
    return
  }
  const userResponse: UserResponse = await res.json()
  setCookie(null, 'token', userResponse.access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
  toast.success('Вход выполнен успешно! Добро пожаловать!')
  router.push('/')
  return userResponse
}

export const removeOnSubmit = async (
  userId: string,
  token: string | undefined
) => {
  const res = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  })
  if (!res.ok) {
    toast.error('Аккаунт не удален!')
    return
  }
  toast.success('Аккаунт успешно удален')
}
