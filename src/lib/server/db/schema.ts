import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { baseModel } from "./base_schema";

export const browserRecord = pgTable("browser_record", {
  ...baseModel,
  ua: varchar({ length: 512 }).unique(),
});

export const entryRecord = pgTable("entry_record", {
  ...baseModel,
  ip: varchar({ length: 15 }),
  page: varchar({ length: 255 }),
  browserId: integer("browser_id")
    .notNull()
    .references(() => browserRecord.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});
