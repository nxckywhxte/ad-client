'use client'

import { useForm } from 'react-hook-form'
import {
  AuthFormType,
  FormData,
} from './auth-form.interface'
import { useEffect, useState } from 'react'
import { AuthRoleSelect } from '@/components/base/input/FormRoleSelect'
import { handleRegisterUser } from '@/utils/functions/register'
import { handleLoginUser } from '@/utils/functions/login'
import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'
import { UserRole } from '@/utils/types'
import { getRoles } from '@/utils/functions/roles'

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      username: '',
      rawPassword: '',
      roleName: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const [formType, setFormType] =
    useState<AuthFormType>('register')
  const [existRoles, setExistRoles] =
    useState<UserRole[]>()

  const onLoginSubmit = handleSubmit(
    async data => {
      setLoading(true)
      await handleLoginUser({
        username: data.username,
        rawPassword: data.rawPassword,
      })
      reset()
      setLoading(false)
      redirect('/', RedirectType.push)
    }
  )

  useEffect(() => {
    const fetchRoles = async () => {
      const roles: UserRole[] = await getRoles()
      const updatedRoles = roles.slice(1)
      setExistRoles(updatedRoles)
    }

    fetchRoles().catch(console.error)
  })

  const onRegisterSubmit = handleSubmit(
    async data => {
      setLoading(true)
      await handleRegisterUser({
        username: data.username,
        email: data.email,
        roleName: data.roleName,
        rawPassword: data.rawPassword,
      })
      reset()
      setLoading(false)
      setFormType('login')
    }
  )

  return (
    <form
      onSubmit={
        formType === 'register'
          ? onRegisterSubmit
          : onLoginSubmit
      }
      className='w-full rounded-md border px-8 py-10 shadow-xl dark:border-drCurrentLine'>
      {formType === 'register' ? (
        <div className='mb-3 flex flex-col gap-2'>
          <label>Электронная почта:</label>
          <input
            {...register('email', {
              required: true,
            })}
            className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
            type='email'
            aria-invalid={
              errors.email ? 'true' : 'false'
            }
          />
          {errors.email?.type === 'required' && (
            <p
              role='alert'
              className='text-sm text-drRed'>
              Обязательный параметр
            </p>
          )}
        </div>
      ) : null}
      <div className='mb-3 flex flex-col gap-2'>
        <label>Никнейм:</label>
        <input
          {...register('username', {
            required: true,
            pattern: /^[a-z0-9]+$/i,
            maxLength: 12,
            minLength: 8,
          })}
          className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
          type='text'
          aria-invalid={
            errors.username ? 'true' : 'false'
          }
        />
        {errors.username?.type === 'required' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Обязательный параметр
          </p>
        )}
        {errors.username?.type === 'pattern' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Никнейм должен содержать следующие
            символы: [a-z0-9]
          </p>
        )}
        {errors.username?.type ===
          'minLength' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Никнейм должен содержать более 8
            символов
          </p>
        )}
        {errors.username?.type ===
          'maxLength' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Никнейм должен содержать не более 12
            символов
          </p>
        )}
      </div>
      <div className='mb-3 flex flex-col gap-2'>
        <label>Пароль:</label>
        <input
          {...register('rawPassword', {
            required: true,
            minLength: 8,
            maxLength: 16,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/i,
          })}
          className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
          type='password'
          aria-invalid={
            errors.rawPassword ? 'true' : 'false'
          }
        />
        {errors.rawPassword?.type ===
          'required' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Обязательный параметр
          </p>
        )}
        {errors.rawPassword?.type ===
          'pattern' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Пароль должен содержать минимум один
            заглавный, один строчный, один
            специальный символ: [@$!%*#?&]
          </p>
        )}
        {errors.rawPassword?.type ===
          'minLength' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Пароль должен содержать более 8
            символов
          </p>
        )}
        {errors.rawPassword?.type ===
          'maxLength' && (
          <p
            role='alert'
            className='text-sm text-drRed'>
            Пароль должен содержать не более 16
            символов
          </p>
        )}
      </div>
      {formType === 'register' ? (
        <div>
          <AuthRoleSelect
            roleData={existRoles}
            label='Выберите роль:'
            {...register('roleName')}
          />
        </div>
      ) : null}
      <div className='mt-6 flex-col items-center gap-4'>
        <span className='mr-4 text-sm md:text-base'>
          {formType === 'login'
            ? 'Еще нет аккаунта ?'
            : 'Уже есть аккаунт ?'}
        </span>
        <button
          onClick={() => {
            formType === 'register'
              ? setFormType('login')
              : setFormType('register')
          }}
          className='text-sm hover:text-drComment dark:hover:text-drPurple md:text-base'>
          {formType === 'register'
            ? 'Войдите'
            : 'Зарегистрируйтесь'}
        </button>
      </div>
      <div>
        <button
          type='submit'
          disabled={loading}
          className='mt-10 rounded-md bg-drComment px-4 py-2 text-drForeground'>
          {formType === 'register'
            ? 'Регистрация'
            : 'Авторизация'}
        </button>
      </div>
    </form>
  )
}
