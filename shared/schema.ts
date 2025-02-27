import { pgTable, text, serial, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const propertyOnboarding = pgTable("property_onboarding", {
  id: serial("id").primaryKey(),
  property_name: text("property_name").notNull(),
  registration_number: text("registration_number").notNull(),
  contact_full_name: text("contact_full_name").notNull(),
  contact_phone: text("contact_phone").notNull(),
  contact_email: text("contact_email").notNull(),
  contact_website: text("contact_website"),
  currency: text("currency").notNull(),
  billing_address: text("billing_address").notNull(),
  billing_city: text("billing_city").notNull(),
  billing_postal: text("billing_postal").notNull(),
  billing_country: text("billing_country").notNull(),
  safari_guides: jsonb("safari_guides").notNull(),
  activities: jsonb("activities").notNull(),
  staff_names: text("staff_names").notNull(),
  general_manager: jsonb("general_manager").notNull(),
  department_managers: jsonb("department_managers").notNull(),
  rooms_available: integer("rooms_available").notNull(),
  wifi_details: jsonb("wifi_details").notNull(),
  night_porter: jsonb("night_porter").notNull(),
  ci_uploads: jsonb("ci_uploads"),
  property_documents: jsonb("property_documents"),
  current_forms: jsonb("current_forms"),
  user_access_emails: jsonb("user_access_emails").notNull()
});

export const insertPropertySchema = createInsertSchema(propertyOnboarding);

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof propertyOnboarding.$inferSelect;