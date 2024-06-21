import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
// TODO: Utworzyć odpowiedni schemat migracji (np. wszystkie schematy w folderze   czy tylko z foldera database)
  // schema: './server/database/*.schema.ts',
  // schema: './server/**/*.schema.ts',
  out: './server/database/migrations'
})
