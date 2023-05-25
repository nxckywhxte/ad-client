'use client'
import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

interface ThemeSwitchProps {
  iconWidth: number
  iconHeight: number
}

export const ThemeSwitch: FC<
  ThemeSwitchProps
> = ({ iconWidth, iconHeight }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <button
        onClick={() => {
          setTheme(
            theme === 'dark' ? 'light' : 'dark'
          )
        }}>
        {theme === 'dark' ? (
          <SunIcon
            width={iconWidth}
            height={iconHeight}
          />
        ) : (
          <MoonIcon
            width={iconWidth}
            height={iconHeight}
          />
        )}
      </button>
    </div>
  )
}
