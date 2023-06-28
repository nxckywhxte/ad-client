import { FC } from 'react'
import { ErrorNotice, FormInput } from '@/components/base/input'
import { FormFileSelect } from '@/components/base/input/form/FormFileSelect'
import { FormStep } from '@/types/form'

export const ProfileStep: FC<FormStep> = ({ errors, register }) => {
  return (
    <>
      <FormInput
        required={errors.lastName?.type === 'required'}
        label={'Фамилия:'}
        placeholder={'Иванов'}
        type={'text'}
        ariaInvalid={errors.lastName ? 'true' : 'false'}
        {...register('lastName', {
          required: true,
        })}>
        {errors.lastName?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
      </FormInput>
      <FormInput
        required={errors.firstName?.type === 'required'}
        label={'Имя:'}
        placeholder={'Иван'}
        type={'text'}
        ariaInvalid={errors.firstName ? 'true' : 'false'}
        {...register('firstName', {
          required: true,
        })}>
        {errors.firstName?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
      </FormInput>
      <FormInput
        required={errors.patronymic?.type === 'required'}
        label={'Отчество:'}
        placeholder={'Иванович'}
        type={'text'}
        ariaInvalid={errors.patronymic ? 'true' : 'false'}
        {...register('patronymic', {
          required: true,
        })}>
        {errors.patronymic?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
      </FormInput>
      <FormInput
        label={'Дата рождения:'}
        placeholder={''}
        type={'date'}
        ariaInvalid={errors.birthday ? 'true' : 'false'}
        {...register('birthday', {
          valueAsDate: true,
        })}
      />
      <FormInput
        label={'Номер телефона:'}
        placeholder={''}
        type={'tel'}
        ariaInvalid={errors.phoneNumber ? 'true' : 'false'}
        {...register('phoneNumber')}
      />
      <FormFileSelect
        required={errors.avatarFile?.type === 'required'}
        label={'Выберите фото профиля:'}
        {...register('avatarFile', {
          required: true,
        })}>
        {errors.avatarFile?.type === 'required' ? (
          <ErrorNotice errorText={'Обязательное поле'} />
        ) : null}
      </FormFileSelect>
    </>
  )
}
