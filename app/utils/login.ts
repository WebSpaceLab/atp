import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, { message: "Password is too short" }).max(20, { message: "Password is too long" }),
  rememberMe: z.boolean().optional()
})