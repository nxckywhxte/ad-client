'use client'
export const FormInput = () => {
  return (
    <div className='flex flex-col justify-start'>
      <label>Никнейм</label>
      <input
        placeholder='Введите свой никнейм'
        className='rounded-md border-none bg-drForeground px-4 py-2 text-sm font-light text-drCurrentLine shadow-xl'
      />
    </div>
  )
}
