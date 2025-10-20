'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 60, damping: 30 }}
      className="w-full md:max-w-[87%] m-auto px-4 md:px-12 flex-1 flex flex-col pb-24 xl:pb-36 min-h-screen text-slate-900 dark:text-slate-50 dark:bg-slate-900 
      [&>*:not(:first-child)]:mt-24 [&>*:nth-child(2)]:mt-0 xl:[&>*:not(:first-child)]:mt-32 xl:[&>*:nth-child(2)]:mt-0
      "
    >
      {children}
    </motion.main>
  )
}

export default Layout
