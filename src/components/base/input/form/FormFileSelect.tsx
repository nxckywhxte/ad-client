import { ChangeHandler } from 'react-hook-form'
import { forwardRef, ReactNode } from 'react'

interface FormFileSelectProps {
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  name?: string
  label: string
  children?: ReactNode | ReactNode[]
}

export const FormFileSelect = forwardRef<HTMLInputElement, FormFileSelectProps>(
  ({ children, onChange, onBlur, name, label, ...props }, ref) => (
    <div className='mb-3 flex w-fit flex-col gap-2'>
      <label>{label}</label>
      <input
        className='rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground'
        name={name}
        ref={ref}
        accept='image/jpeg'
        type={'file'}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {children}
    </div>
  )
)
FormFileSelect.displayName = 'FormGenderSelect'
