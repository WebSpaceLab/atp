import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, 'Username name is required'),
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, { message: "Password is too short" }).max(20, { message: "Password is too long" }),
  isAgree: z.boolean(),
  confirmPassword: z.string().nullable()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})