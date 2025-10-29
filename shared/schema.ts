import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages)
  .pick({
    name: true,
    email: true,
    phone: true,
    message: true,
  })
  .extend({
    email: z.string().email("Inserisci un'email valida"),
    phone: z.string().min(8, "Il numero di telefono deve contenere almeno 8 caratteri"),
    name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
    message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
  });

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
