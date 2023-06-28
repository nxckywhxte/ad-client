'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IAuthForm } from '@/types/form'
import { defaultAuthFormValues } from '@/components/data/form/form.data'
import { IRole } from '@/types/role'
import { API_BASE_URL } from '@/utils/constants'
import toast from 'react-hot-toast'
import { registerOnSubmit } from '@/utils/functions/form'
import { RegisterStep } from '@/components/base/form/step/RegisterStep'
import { ProfileStep } from '@/components/base/form/step/ProfileStep'
import { FormButton } from '@/components/base/input'

type AdminAddUserFormType = number
export const AdminAddUserForm = () => {
  let [adminAddUserFormType, setAdminAddUserFormType] =
    useState<AdminAddUserFormType>(1)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isLoading, isSubmitting },
  } = useForm<IAuthForm>({
    mode: 'all',
    defaultValues: defaultAuthFormValues,
  })
  const [roles, setRoles] = useState<IRole[]>([])
  useEffect(() => {
    const getAllRoles = async () => {
      const data = await fetch(`${API_BASE_URL}/roles`)
      if (!data.ok) {
        toast.error('Ошибка при получении списка ролей!')
        return
      }
      toast.success('Список ролей успешно получен!')
      const roles: IRole[] = await data.json()
      return roles
    }
    getAllRoles().then(value => {
      if (!value) {
        return
      }
      setRoles(value)
    })
  }, [])
  const goNextStep = (currentStep: number) => {
    currentStep = adminAddUserFormType
    setAdminAddUserFormType(currentStep + 1)
  }

  const goBackStep = (currentStep: number) => {
    currentStep = adminAddUserFormType
    setAdminAddUserFormType(currentStep - 1)
  }

  const values = getValues()
  return (
    <div className='flex flex-col p-6'>
      <form
        noValidate
        onSubmit={
          adminAddUserFormType === 2
            ? handleSubmit(() => registerOnSubmit(values))
            : () => {}
        }>
        <h1 className='my-6 text-lg'>
          Шаг {adminAddUserFormType} -{' '}
          {adminAddUserFormType === 1
            ? 'Создание пользователя'
            : adminAddUserFormType === 2
            ? 'Создание профиля пользователя'
            : null}
        </h1>
        {adminAddUserFormType === 1 ? (
          <RegisterStep
            register={register}
            errors={errors}
            rolesFromServer={roles}
          />
        ) : adminAddUserFormType === 2 ? (
          <ProfileStep register={register} errors={errors} />
        ) : null}
        <div className='flex items-center gap-2'>
          <FormButton
            disabled={!isValid || isSubmitting || isLoading}
            onClick={() => {
              if (adminAddUserFormType === 1) goNextStep(adminAddUserFormType)
            }}
            label={
              adminAddUserFormType < 2
                ? 'Далее'
                : adminAddUserFormType >= 2
                ? 'Создать'
                : ''
            }
          />
          {adminAddUserFormType !== 1 ? (
            <FormButton
              label={'Назад'}
              onClick={() => goBackStep(adminAddUserFormType)}
            />
          ) : null}
        </div>
      </form>
    </div>
  )
}
