import axios from 'axios'
import { getCookie, setCookie } from '@/utilities/cookie'

// Hàm kiểm tra accessToken có hợp lệ không
async function verifyToken(accessToken: string): Promise<boolean> {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/auth/verify-token',
      {
        accessToken
      }
    )
    return response.data
  } catch (error) {
    console.error('Lỗi khi xác minh accessToken:', error)
    return false
  }
}

// Hàm refresh accessToken
async function refreshToken(refreshToken: string): Promise<string | null> {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/auth/refresh-token',
      {
        refreshToken
      }
    )
    return response.data.newToken
  } catch (error) {
    console.error('Lỗi khi refresh accessToken:', error)
    return null
  }
}

export async function checkAuthStatus(): Promise<boolean> {
  const accessToken = getCookie('accessToken')
  const refreshTokenValue = getCookie('refreshToken')
  console.log({ accessToken, refreshTokenValue })

  if (!accessToken) {
    return false
  }

  const isTokenValid = await verifyToken(accessToken)
  console.log(isTokenValid)

  if (isTokenValid) {
    return true
  }

  if (refreshTokenValue) {
    const newToken = await refreshToken(refreshTokenValue)
    if (newToken) {
      setCookie('accessToken', newToken, 15 / 1440) // Lưu accessToken mới vào cookie, hết hạn sau 1 ngày
      return true
    }
  }

  return false
}
