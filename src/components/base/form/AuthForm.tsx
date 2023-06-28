'use client'
import { useEffect, useState } from 'react'
import { AuthFormType, IAuthForm } from '@/types/form'
import { RegisterStep } from '@/components/base/form/step/RegisterStep'
import { ProfileStep } from '@/components/base/form/step/ProfileStep'
import { LoginStep } from '@/components/base/form/step/LoginStep'
import { useForm } from 'react-hook-form'
import { defaultAuthFormValues } from '@/components/data/form/form.data'
import { FormButton } from '@/components/base/input'
import { API_BASE_URL } from '@/utils/constants'
import toast from 'react-hot-toast'
import { IRole } from '@/types/role'
import { loginOnSubmit, registerOnSubmit } from '@/utils/functions/form'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'

export const AuthForm = () => {
  const [formType, setFormType] = useState<AuthFormType>(1)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isLoading, isSubmitting },
  } = useForm<IAuthForm>({
    mode: 'all',
    defaultValues: defaultAuthFormValues,
  })
  const router = useRouter()
  const [roles, setRoles] = useState<IRole[]>([])
  const setUserData = useAuthStore(state => state.setUserData)
  const setAuthenticated = useAuthStore(state => state.setAuthenticated)

  useEffect(() => {
    const getAllRoles = async () => {
      const data = await fetch(`${API_BASE_URL}/roles`)
      if (!data.ok) {
        toast.error('Ошибка при получении списка ролей!')
        return
      }
      toast.success('Список ролей успешно получен!')
      const roles: IRole[] = await data.json()
      return roles.slice(1)
    }
    getAllRoles().then(value => {
      if (!value) {
        return
      }
      setRoles(value)
    })
  }, [])

  const goNextStep = (currentStep: number) => {
    currentStep = formType
    setFormType(currentStep + 1)
  }

  const goBackStep = (currentStep: number) => {
    currentStep = formType
    setFormType(currentStep - 1)
  }
  const values = getValues()
  return (
    <div>
      <form
        noValidate
        onSubmit={
          formType === 2
            ? handleSubmit(() => registerOnSubmit(values, setFormType))
            : formType === 3
            ? handleSubmit(() => {
                loginOnSubmit(values, router).then(data => {
                  setUserData(data)
                  setAuthenticated()
                })
              })
            : () => {}
        }>
        <h1 className='my-6 text-lg'>
          Шаг {formType} -{' '}
          {formType === 1
            ? 'Регистрация аккаунта'
            : formType === 2
            ? 'Создание профиля пользователя'
            : 'Авторизация в системе'}
        </h1>
        {formType === 1 ? (
          <RegisterStep
            register={register}
            errors={errors}
            rolesFromServer={roles}
          />
        ) : formType === 2 ? (
          <ProfileStep register={register} errors={errors} />
        ) : formType === 3 ? (
          <LoginStep register={register} errors={errors} />
        ) : null}
        {formType === 1 ? (
          <div className='flex items-center gap-2'>
            <p className='my-6'>Уже есть аккаунт?</p>
            <button
              className='hover:text-drPurple'
              onClick={() => setFormType(3)}>
              Войти в систему
            </button>
          </div>
        ) : (
          formType === 3 && (
            <div className='flex items-center gap-2'>
              <p className='my-6'>Еще нет аккаунта?</p>
              <button
                className='hover:text-drPurple'
                onClick={() => setFormType(1)}>
                Регистрация
              </button>
            </div>
          )
        )}
        <div className='flex items-center gap-2'>
          <FormButton
            disabled={!isValid || isSubmitting || isLoading}
            onClick={() => {
              if (formType === 1) goNextStep(formType)
            }}
            label={formType < 3 ? 'Далее' : formType >= 3 ? 'Авторизация' : ''}
          />
          {formType !== 1 ? (
            <FormButton label={'Назад'} onClick={() => goBackStep(formType)} />
          ) : null}
        </div>
      </form>
    </div>
  )
}
