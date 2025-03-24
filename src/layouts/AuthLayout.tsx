import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const AuthLayout: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='w-full border-b bg-background/95 py-4'>
        <div className='container mx-auto flex items-center justify-center px-4'>
          <Link to='/' className='flex items-center gap-2'>
            <GraduationCap className='h-6 w-6 text-red-500' />
            <span className='text-xl font-bold text-red-500'>
              PTIT | Hệ thống đăng ký môn học
            </span>
          </Link>
        </div>
      </header>
      <main className='flex-1 flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md p-6'>
          <Outlet />
        </div>
      </main>
      <footer className='border-t py-4'>
        <div className='container mx-auto text-center px-4'>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Hệ thống đăng ký môn học
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AuthLayout
