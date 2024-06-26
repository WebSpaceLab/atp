import { loginSchema } from '../../../app/utils/login'
import * as bcrypt from "bcrypt"
import { useValidatedBody } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const body = await useValidatedBody(event, loginSchema)

  const { email, password } = body

  const user = await useDrizzle().select().from(tables.users).where(eq(tables.users.email, email)).get()

  if (!user) {
    throw createError({
      status: 403,
      statusMessage: 'User not found'
    })
  }

  if (!bcrypt.compareSync(password, user.password as string)) {
    throw createError({
      status: 403,
      statusMessage: 'Password is incorrect'
    })
  }

  await setUserSession(event, {
    user,
    loggedInAt: new Date()
    // Any extra fields
  })

  return {
    message: {
      title: 'Login',
      description: 'Login was successful',
      color: 'primary'
    }
  }
})
