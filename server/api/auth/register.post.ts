import { insertUserSchema } from '../../database/schemas/users.schema'
import { useValidatedBody, z } from 'h3-zod'
export default defineEventHandler(async (event) => {
  // const body = await readValidatedBody(event, insertUserSchema.parse)
  const body = await useValidatedBody(event, insertUserSchema)
  // const body = await readBody(event)
  console.log('body', body)

  return {
    body
  }
})
