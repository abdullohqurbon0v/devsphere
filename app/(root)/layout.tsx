import React from 'react'
import Navbar from './_components/navbar'
import { ChildProps } from '@/types'

const Layout = ({ children }: ChildProps) => {
  return (
    <div className='bg-slate-100 dark:bg-black min-h-screen'>
      <Navbar />
      <main className='max-w-[1200px] mx-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout