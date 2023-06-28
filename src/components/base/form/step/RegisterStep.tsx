import { AuthRoleSelect, ErrorNotice, FormInput } from '@/components/base/input'
import { FC } from 'react'
import { RegisterFormStep } from '@/types/form'

export const RegisterStep: FC<RegisterFormStep> = ({
  register,
  errors,
  rolesFromServer,
}) => {
  return (
    <>
      <FormInput
        required={errors.email?.type === 'required'}
        label={'Электронная почта:'}
        placeholder={'nw@gmail.com'}
        type={'email'}
        ariaInvalid={errors.email ? 'true' : 'false'}
        {...register('email', {
          required: true,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}>
        {errors.email?.type === 'pattern' ? (
          <ErrorNotice errorText={'Неверный формат электронной почты'} />
        ) : null}
        {errors.email?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
      </FormInput>
      <FormInput
        required={errors.username?.type === 'required'}
        label={'Никнейм:'}
        placeholder={'nxckywhxte'}
        type={'text'}
        ariaInvalid={errors.username ? 'true' : 'false'}
        {...register('username', {
          required: true,
          pattern: /^[a-z0-9]*$/,
          maxLength: 16,
          minLength: 8,
        })}>
        {errors.username?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
        {errors.username?.type === 'pattern' ? (
          <ErrorNotice errorText={'Разрешены следующие символы: [a-z0-9]'} />
        ) : null}
        {errors.username?.type === 'maxLength' ? (
          <ErrorNotice errorText={'Не более 16 символов'} />
        ) : null}
        {errors.username?.type === 'minLength' ? (
          <ErrorNotice errorText={'Не менее 8 символов'} />
        ) : null}
      </FormInput>
      <FormInput
        required={errors.rawPassword?.type === 'required'}
        label={'Пароль:'}
        placeholder={'***************'}
        type={'password'}
        ariaInvalid={errors.rawPassword ? 'true' : 'false'}
        {...register('rawPassword', {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          maxLength: 16,
          minLength: 8,
        })}>
        {errors.rawPassword?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
        {errors.rawPassword?.type === 'pattern' ? (
          <ErrorNotice
            errorText={
              'Как минимум одна заглавная, одна строчная латинская буква и спец. символ: [@$!%*?&]'
            }
          />
        ) : null}
        {errors.rawPassword?.type === 'maxLength' ? (
          <ErrorNotice errorText={'Не более 16 символов'} />
        ) : null}
        {errors.rawPassword?.type === 'minLength' ? (
          <ErrorNotice errorText={'Не менее 8 символов'} />
        ) : null}
      </FormInput>
      <AuthRoleSelect
        label={'Выберите роль:'}
        roleData={rolesFromServer}
        {...register('roleName', {
          required: true,
        })}
      />
    </>
  )
}
