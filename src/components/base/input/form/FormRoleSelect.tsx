import { forwardRef } from 'react'
import { ChangeHandler } from 'react-hook-form'
import { IRole } from '@/types/role'

export interface AuthRoleSelect {
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  name?: string
  label: string
  roleData: IRole[] | undefined
}

export const AuthRoleSelect = forwardRef<HTMLSelectElement, AuthRoleSelect>(
  ({ onChange, onBlur, name, label, roleData }, ref) => (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <select
        className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}>
        {roleData !== undefined ? (
          roleData.map(role => {
            return (
              <option
                key={role.id}
                value={role.name}
                className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'>
                {role.name}
              </option>
            )
          })
        ) : (
          <option className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'>
            Роли отсутствуют
          </option>
        )}
      </select>
    </div>
  )
)
AuthRoleSelect.displayName = 'AuthRoleSelect'
