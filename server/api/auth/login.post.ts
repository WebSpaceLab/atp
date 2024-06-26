import { loginSchema } from '../../../app/utils/login'
import * as argon2 from "argon2";
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

  // TODO - compare the password with the hashed password from the database
  const isPasswordCorrect = await argon2.verify(user.password, password)

  if (!isPasswordCorrect) {
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
