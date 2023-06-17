import { forwardRef } from 'react'
import { ChangeHandler } from 'react-hook-form'
import { UserRole } from '@/utils/types'

interface AuthRoleSelect {
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  name?: string
  label: string
  roleData: UserRole[] | undefined
}

export const AuthRoleSelect = forwardRef<
  HTMLSelectElement,
  AuthRoleSelect
>(
  (
    { onChange, onBlur, name, label, roleData },
    ref
  ) => (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <select
        className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}>
        {roleData === undefined ? (
          <option
            key={'1'}
            value={'Ничего нет'}
            className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'>
            {'Ничего нет'}
          </option>
        ) : (
          roleData.map(role => (
            <option
              key={role.id}
              value={role.name}
              className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'>
              {role.name}
            </option>
          ))
        )}
      </select>
    </div>
  )
)
AuthRoleSelect.displayName = 'AuthRoleSelect'
