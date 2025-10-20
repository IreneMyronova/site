'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Icon } from './Icon'
import { ModeToggle } from './ModeToggle'

const menuItemClasses ='w-full flex items-center gap-3 p-3 px-6 text-sm tracking-wide text-slate-700 dark:text-slate-200 hover:text-slate-800 dark:hover:text-white hover:font-semibold transition-colors transition-all border-b border-b-slate-200 dark:border-b-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
const iconClasses = 'size-4 opacity-70'

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // Avoid hydration mismatch

  return (
    <header className="w-full p-2 sm:p-4 fixed z-5000 pointer-events-none bg-white dark:bg-slate-800 flex">
      <nav className="flex w-full justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center font-bold opacity-80 hover:opacity-100 transition-opacity rounded outline-offset-8 pointer-events-auto"
        >
          {/* Logo  */}
          <Icon name="home" className="size-4" />
          Home
        </Link>

        <div className="relative flex items-center gap-2 pointer-events-auto">
          {/* Theme Toggle not work switch */}
          <ModeToggle />

          {/* Burger Menu */}
          <button
            className="p-2 text-xs uppercase font-bold shadow-md hover:shadow-lg border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <span aria-label="Close menu" className="w-4 block">
                <Icon name="close" className="size-4" />
              </span>
            ) : (
              <span className="flex gap-2 items-center group text-xs">
                Menu
              </span>
            )}
          </button>

          {/* Menu */}
          <div className={`${navbar ? '' : 'hidden'}`}>
            <menu className="min-w-48 flex flex-col absolute right-4 sm:right-6 py-3 bg-white dark:bg-slate-700 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/"
                  className={menuItemClasses}
                >
                  <Icon name="home" className={iconClasses} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/service"
                  className={menuItemClasses}
                >
                  <Icon name="service" className={iconClasses} />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/work"
                  className={menuItemClasses}
                >
                  <Icon name="work" className={iconClasses} />
                  My works
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/#testimonials"
                  className={menuItemClasses}
                >
                  <Icon name="testimonial" className={iconClasses} />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/#faq"
                  className={menuItemClasses}
                >
                  <Icon name="faq" className={iconClasses} />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/#contacts"
                  className={menuItemClasses}
                >
                  <Icon name="contact" className={iconClasses} />
                  Contacts
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </nav>
    </header>
  )
}
