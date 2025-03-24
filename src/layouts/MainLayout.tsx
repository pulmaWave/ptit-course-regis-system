import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { logout } from '@/services/auth'

const MainLayout: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-2'>
            <GraduationCap className='h-6 w-6' />
            <span className='text-xl font-bold'>Hệ thống đăng ký môn học</span>
          </div>
          <nav className='hidden md:flex gap-6'>
            <Link
              to='/'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Trang chủ
            </Link>
            <Link
              to='/course-registration'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Đăng ký môn học
            </Link>
            <Link
              to='/schedule'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Lịch học
            </Link>
            <Link
              to='/profile'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Hồ sơ
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleLogout}
              className='inline-flex items-center justify-center rounded-md border border-input bg-background px-3 h-9 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer className='border-t py-6 md:py-0'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4'>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Hệ thống đăng ký môn học. Bản
            quyền thuộc về Trường Đại học.
          </p>
          <div className='flex gap-4'>
            <Link
              to='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Điều khoản
            </Link>
            <Link
              to='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Chính sách
            </Link>
            <Link
              to='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
