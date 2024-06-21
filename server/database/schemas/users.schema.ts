
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  isAgree: integer('is_agree', { mode: 'boolean' }).notNull().default(false),
  // avatarUrl: text('avatar').notNull(),
  role: text('role', { enum: ['admin', 'user', 'coach', 'editor'] }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

// Schema for inserting a user - can be used to validate API requests
// export const insertUserSchema = createInsertSchema(users);
// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);

// // Overriding the fields
// const insertUserSchema = createInsertSchema(users, {
//   role: z.string(),
// });
// // Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertUserSchema = createInsertSchema(users, {
  username: z.string().min(3, 'Username name is required'),
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  isAgree: z.boolean(),

  // role: z.string(),
});

// // Usage
// const user = insertUserSchema.parse({
//   name: 'John Doe',
//   email: 'johndoe@test.com',
//   role: 'admin',
// });
// // Zod schema type is also inferred from the table schema, so you have full type safety
// const requestSchema = insertUserSchema.pick({ name: true, email: true });