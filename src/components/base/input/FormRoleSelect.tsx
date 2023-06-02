import { forwardRef } from 'react'
import { ChangeHandler } from 'react-hook-form'

interface RoleNameProps {
  id: number
  name: string
}

const roleNameData: RoleNameProps[] = [
  {
    id: 1,
    name: 'Преподаватель',
  },
  {
    id: 2,
    name: 'Студент',
  },
  {
    id: 3,
    name: 'Модератор',
  },
]

interface AuthRoleSelect {
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  name?: string
  label: string
}

export const AuthRoleSelect = forwardRef<
  HTMLSelectElement,
  AuthRoleSelect
>(({ onChange, onBlur, name, label }, ref) => (
  <div className='flex flex-col gap-2'>
    <label>{label}</label>
    <select
      className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}>
      {roleNameData.map(role => (
        <option
          key={role.id}
          value={role.name}
          className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'>
          {role.name}
        </option>
      ))}
    </select>
  </div>
))
AuthRoleSelect.displayName = 'AuthRoleSelect'
