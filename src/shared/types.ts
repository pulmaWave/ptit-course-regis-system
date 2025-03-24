export interface CourseType {
  id: string
  name: string
  credits: number
  schedule: string
  location: string
  type: string
}

enum Role {
  'student',
  'admin'
}

export interface UserResponse {
  id: number
  username: string
  name: string
  role: Role
  email: string
  academicYear: string
  major: string
}
