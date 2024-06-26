import { z } from 'zod'

export const roleUserOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Coach', value: 'coach' },
  { label: 'Editor', value: 'editor' }
] as const

export const roleUserValues = ['admin', 'user', 'coach', 'editor'] as const satisfies Exclude<typeof roleUserOptions[number]['value'], undefined>[]

export const userSchema = z.object({
  id: z.number(),
  username: z.string().min(3, 'Username name is required'),
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  isAgree: z.boolean(),
  role: z.enum(roleUserValues),
  createdAt: z.number(),
  updatedAt: z.number(),
})