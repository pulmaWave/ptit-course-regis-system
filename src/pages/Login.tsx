import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/services/auth'
import { checkAuthStatus } from '@/services/checkAuthStatus'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const success = await login(username, password)
      console.log(success)
      if (success) {
        navigate('/')
      } else {
        setError(
          'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.'
        )
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Đã xảy ra lỗi. Vui lòng thử lại sau.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = await checkAuthStatus()
        console.log(authStatus)
        if (!authStatus) {
          console.log('ve login')
          navigate('/login', { replace: true })
        } else {
          navigate('/')
        }
      } catch (error) {
        console.error('Lỗi khi kiểm tra trạng thái xác thực:', error)
        navigate('/login', { replace: true })
      }
    }

    verifyAuth()
  }, [])

  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
      <div className='flex flex-col space-y-1.5 p-6'>
        <h3 className='text-2xl font-semibold leading-none tracking-tight'>
          Đăng nhập
        </h3>
        <p className='text-sm text-muted-foreground'>
          Nhập thông tin đăng nhập của bạn
        </p>
      </div>
      <div className='p-6 pt-0'>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label
                htmlFor='username'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Tên đăng nhập
              </label>
              <input
                id='username'
                type='text'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='password'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Mật khẩu
              </label>
              <input
                id='password'
                type='password'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className='text-sm text-red-500'>{error}</p>}
            <button
              type='submit'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-primary-foreground hover:bg-red-600 hover:text-primary-foreground/90 h-10 px-4 py-2 w-full'
              disabled={isLoading}
            >
              {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
          </div>
        </form>
        <div className='mt-4 text-center text-sm'>
          Bạn quên mật khẩu? Liên hệ với Quản trị viên hoặc Giáo viên chủ nhiệm.
        </div>
      </div>
    </div>
  )
}

export default LoginPage
