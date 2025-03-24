import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuthStatus } from '@/services/checkAuthStatus'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface WithAuthProps {}

export function withAuth<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
      const verifyAuth = async () => {
        try {
          const authStatus = await checkAuthStatus()
          console.log(authStatus)
          setIsAuthenticated(authStatus)
          if (!authStatus) {
            console.log('ve login')
            navigate('/login', { replace: true })
          } else {
            navigate('/')
          }
        } catch (error) {
          console.error('Lỗi khi kiểm tra trạng thái xác thực:', error)
          setIsAuthenticated(false)
          navigate('/login', { replace: true })
        }
      }

      verifyAuth()
    }, [navigate])

    if (isAuthenticated === null) {
      // Trạng thái đang loading, bạn có thể hiển thị một spinner hoặc skeleton ở đây
      return <div>Đang tải...</div>
    }

    if (isAuthenticated === false) {
      // Nếu không được xác thực, không render gì cả (vì chúng ta đã chuyển hướng)
      return null
    }

    // Nếu đã xác thực, render component được bảo vệ
    return <WrappedComponent {...props} />
  }
}
