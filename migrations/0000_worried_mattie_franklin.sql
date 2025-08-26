CREATE TABLE "reviews_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(40) NOT NULL,
	"programme" varchar(40) NOT NULL,
	"description" text NOT NULL,
	"photo" varchar(255) NOT NULL
);
