CREATE TABLE "entry_record" (
	"id" serial PRIMARY KEY NOT NULL,
	"guid" uuid NOT NULL,
	"created_at" timestamp DEFAULT LOCALTIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT LOCALTIMESTAMP NOT NULL,
	"ip" varchar(15),
	"page" varchar(255)
);
