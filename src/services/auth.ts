import axios from 'axios'
import { getCookie, setCookie } from '@/utilities/cookie'
import { UserResponse } from '@/shared/types'
// import { checkAuthStatus } from './checkAuthStatus'
// import { checkAuthStatus } from '@/services/checkAuthStatus'

interface LoginResponse {
  accessToken: string
  refreshToken: string
  userResponse: UserResponse
}

export async function login(
  username: string,
  password: string
): Promise<boolean> {
  try {
    const response = await axios.post<LoginResponse>(
      'http://localhost:3000/api/auth/login',
      {
        data: {
          username,
          password
        }
      }
    )
    const { accessToken, refreshToken, userResponse } = response.data
    console.log('user data: ', userResponse)
    // Lưu accessToken và refresh accessToken vào cookie
    setCookie('accessToken', accessToken, 15 / 1440)
    setCookie('refreshToken', refreshToken, 7)
    return true
  } catch (error) {
    console.error('Lỗi đăng nhập:', error)
    return false
  }
}

export async function logout(): Promise<boolean> {
  try {
    const accessToken = getCookie('accessToken')

    // Nếu có accessToken, gọi API để vô hiệu hóa accessToken (blacklist accessToken)
    if (accessToken) {
      try {
        // Gọi API logout (có thể bỏ qua lỗi nếu có)
        await axios.post(
          'http://103.232.121.169/api/auth/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
      } catch (error) {
        console.warn('Lỗi khi gọi API logout:', error)
        // Tiếp tục xử lý logout dù API có lỗi
      }
    }

    // Xóa accessToken và refresh accessToken khỏi cookie
    setCookie('accessToken', '', -1) // Đặt thời gian hết hạn trong quá khứ để xóa cookie
    setCookie('refreshToken', '', -1)

    // Xóa thông tin người dùng khỏi localStorage nếu có
    localStorage.removeItem('user')

    return true
  } catch (error) {
    console.error('Lỗi khi đăng xuất:', error)
    return false
  }
}
