import { insertUserSchema } from '../../database/schemas/users.schema'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, insertUserSchema.parse)

  return {
    body
  }
})
