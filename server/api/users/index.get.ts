export default defineEventHandler(async (event) => {
  await requireUserSession(event)


  // const query = await getQuery(event)

  const users = await useDrizzle().select().from(tables.users).all()

  return {
    users
  }
})
