import { userSchema } from '~/utils/users'
import { useValidatedBody, z } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const body = await useValidatedBody(event, userSchema)

  return {
    body
  }
})
