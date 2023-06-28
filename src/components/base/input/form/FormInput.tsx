'use client'

import { forwardRef, ReactNode } from 'react'

interface FormInput {
  label: string
  placeholder: string
  type: string
  name?: string
  ariaInvalid: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined
  children?: ReactNode | ReactNode[]
  required?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInput>(
  (
    {
      label,
      placeholder,
      type,
      name,
      ariaInvalid,
      children,
      required,
      ...props
    },
    ref
  ) => (
    <div className='mb-3 flex flex-col gap-2'>
      <label>{label}</label>
      <input
        required={required}
        ref={ref}
        placeholder={placeholder}
        className='required:border-1 rounded-md border px-4 py-2 text-sm font-light shadow-xl dark:border-drCurrentLine dark:bg-drBackground dark:text-drForeground required:dark:border-drRed'
        type={type}
        name={name}
        aria-invalid={ariaInvalid}
        {...props}
      />
      {children}
    </div>
  )
)
FormInput.displayName = 'FormInput'
