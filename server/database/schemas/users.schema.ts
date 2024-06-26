
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { roleUserValues } from '../../../app/utils/users'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  isAgree: integer('is_agree', { mode: 'boolean' }).notNull().default(false),
  // avatarUrl: text('avatar').notNull(),
  role: text('role', { enum: roleUserValues }).notNull(),

  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
})
