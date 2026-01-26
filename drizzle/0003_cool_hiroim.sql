ALTER TABLE "browser_record" ADD COLUMN "ua" varchar(512);--> statement-breakpoint
ALTER TABLE "entry_record" ADD COLUMN "browser_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "entry_record" ADD CONSTRAINT "entry_record_browser_id_browser_record_id_fk" FOREIGN KEY ("browser_id") REFERENCES "public"."browser_record"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "browser_record" ADD CONSTRAINT "browser_record_ua_unique" UNIQUE("ua");