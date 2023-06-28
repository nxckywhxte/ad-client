'use client'

import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <>
        <Toaster position={'bottom-right'} />
        {children}
      </>
    </ThemeProvider>
  )
}
