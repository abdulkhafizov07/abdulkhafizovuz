CREATE TABLE "browser_record" (
	"id" serial PRIMARY KEY NOT NULL,
	"guid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT LOCALTIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT LOCALTIMESTAMP NOT NULL
);
