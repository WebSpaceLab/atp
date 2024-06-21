import { insertUserSchema } from '~/server/database/schemas/users.schema'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, insertUserSchema.parse)
  console.log('body:', body)
  return {
    body
  }
})
