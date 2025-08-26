import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const reviewsTable = pgTable("reviews_table", {
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 40}).notNull(),
  programme: varchar('programme', {length: 40}).notNull(),
  description: text('description').notNull(),
  photo: varchar('photo', {length: 255}).notNull(),
})

