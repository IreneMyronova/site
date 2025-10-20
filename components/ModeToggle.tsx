'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from './Icon'

const iconClasses = 'size-4 opacity-80 hover:opacity-100 transition-opacity'

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const currentTheme = theme === 'system' ? systemTheme : theme

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-center size-6 text-gray-800 dark:text-gray-200 transition-colors cursor-pointer"
      >
        {/* Sun / Moon */}
        <span
          className={`absolute transition-all duration-300 ${
            currentTheme === 'dark'
              ? 'scale-0 -rotate-90'
              : 'scale-100 rotate-0'
          }`}
        >
          <Icon name="sun" className={iconClasses} />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            currentTheme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
          }`}
        >
          <Icon name="moon" className={iconClasses} />
        </span>
        <span className="sr-only">Toggle theme</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-5 overflow-hidden animate-fade-in">
          <button
            onClick={() => {
              setTheme('light')
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Light
          </button>
          <button
            onClick={() => {
              setTheme('dark')
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Dark
          </button>
          <button
            onClick={() => {
              setTheme('system')
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            System
          </button>
        </div>
      )}
    </div>
  )
}
