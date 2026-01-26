import { sql } from "drizzle-orm";
import { serial, uuid, timestamp } from "drizzle-orm/pg-core";

export const baseModel = {
  id: serial("id").primaryKey().notNull(),
  guid: uuid().defaultRandom().notNull(),
  created_at: timestamp({ mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
  updated_at: timestamp({ mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
};
