import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4'>
      <h1 className='text-red-500 text-6xl font-bold mb-4'>404</h1>
      <p className='text-gray-600 text-xl mb-8'>
        Trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link
        to='/'
        className='inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-600 text-primary-foreground hover:bg-red-500 h-10 px-4 py-2'
      >
        Quay lại trang chủ
      </Link>
    </div>
  )
}

export default NotFoundPage
