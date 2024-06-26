import { registerSchema } from '../../../app/utils/register'
import * as argon2 from "argon2";
import { useValidatedBody } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const body = await useValidatedBody(event, registerSchema)
  const { username, firstName, lastName, email, password, isAgree } = body

  // I check if a given ussername already exists
  const usernameExist = await useDrizzle().select().from(tables.users).where(eq(tables.users.username, username)).all()

  if (usernameExist.length !== 0) {
    throw createError({
      status: 409,
      statusMessage: 'Username already exists'
    })
  }

  // I check if a given email already exists
  const emailExist = await useDrizzle().select().from(tables.users).where(eq(tables.users.email, email)).all()

  if (emailExist.length !== 0) {
    throw createError({
      status: 409,
      statusMessage: 'Email already exists'
    })
  }

  // TODO - hash the password before saving it to the database
  const hashedPassword = await argon2.hash(password)

  const user = await useDrizzle().insert(tables.users).values({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isAgree,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning().get()

  if (!user) {
    throw createError({
      status: 417,
      statusMessage: 'User not created'
    })
  }

  // TODO - send email to user with confirmation link or something like that. 
  return {
    message: {
      title: 'Success',
      description: 'User created successfully',
      color: 'primary'
    }
  }
})
