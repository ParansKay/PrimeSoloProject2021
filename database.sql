
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE "activity" (
    "id" SERIAL PRIMARY KEY,
    "activity_name" VARCHAR (80) NOT NULL,
	"activity_description" VARCHAR (20000) NOT NULL,
    "num_actors" INTEGER NOT NULL,
    "clearance_level" INTEGER NOT NULL DEFAULT 10
);

CREATE TABLE "tag" (
    "id" SERIAL PRIMARY KEY,
    "breath_support" BOOLEAN NOT NULL DEFAULT false,
    "character_development" BOOLEAN NOT NULL DEFAULT false,
	"connection_relationships" BOOLEAN NOT NULL DEFAULT false,
	"energy" BOOLEAN NOT NULL DEFAULT false,
	"enunciation" BOOLEAN NOT NULL DEFAULT false,
	"escalation_urgency" BOOLEAN NOT NULL DEFAULT false,
	"focus" BOOLEAN NOT NULL DEFAULT false,
	"improvisation" BOOLEAN NOT NULL DEFAULT false,
	"listening" BOOLEAN NOT NULL DEFAULT false,
	"memorization" BOOLEAN NOT NULL DEFAULT false,
	"physical_stamina" BOOLEAN NOT NULL DEFAULT false,
	"projection" BOOLEAN NOT NULL DEFAULT false,
	"stage_presence" BOOLEAN NOT NULL DEFAULT false,
	"vulnerability" BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE "activity_tag" (
    "id" SERIAL PRIMARY KEY,
    "activity_id" VARCHAR (80) NOT NULL,
    "tag_id" VARCHAR (80) NOT NULL
);

CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "user_id" VARCHAR (80) NOT NULL,
    "activity_id" VARCHAR (80) NOT NULL
);

--test data for user 
INSERT INTO "user" ("first_name", "last_name", "username", "password", "access_level")
VALUES ('Paran', 'Kashani', 'parankashani', 'turtle$', 10),
('Anne', 'Byrd', 'anneByrd', 'p0tatoez', 10),
('Lumi', 'Kay', 'lumi2020', 'penelope', 1);

--test data for activity
INSERT INTO "activity" ("activity_name", "activity_description", "num_actors", "clearance_level")
VALUES ('Zip Zap Zop', 'Create a circle with your actors standing in it. Tell actors to imagine a bolt of lightening generating from their hands. The pattern is to repeat and pass around the circle the words “Zip, Zap, Zop”. 

The first actor will make eye contact with another ensemble member and clap one hand forward as they say “Zip”. The intended actor will immediately make eye contact with another actor and pass “Zap”. The third actor will continue with “Zop”. The next actor will go back to “Zip”, and the pattern will repeat itself over and over, starting slow and building up to near-instantaneous passes. 

If an actor forgets which word, or doesn’t catch the incoming “zip-zap-zop”, they are considered “out” of the circle. Celebrate this mistake and continue onward, building speed. (Alternatively you can refrain from eliminating players, and instead re-start the activity, going from a slow tempo to lightning fast passes).', 10, 1),
('Meisner Repetition', 'The focus of this exercise is for two actors to listen to one another. One approach is to whisper differing phrases (representing their character’s inner thoughts / objectives) to each actor. They then reveal their phrases to each other, listening, reacting, and repeating this process...', 2, 1),
('Paper Toss', 'Some details here', 10, 10);

--test data for tag
INSERT INTO "tag" ("breath_support", "character_development", "connection_relationships", "energy", "enunciation", "escalation_urgency", "focus", "improvisation", "listening", "memorization", "physical_stamina", "projection", "stage_presence", "vulnerability")
VALUES (false, false, false, true, false, true, false, false, false, false, false, false, false, false),
(false, false, true, false, false, true, false, false, false, false, false, false, false, false),
(false, false, true, false, false, true, false, false, false, false, false, false, false, false);

INSERT INTO "activity_tag" ("activity_id", "tag_id")
   VALUES(1, 1),
   (2, 2),
   (3, 3);
   
INSERT INTO "activity_tag" ("activity_id", "tag_id")
   VALUES(1, 1),
   (2, 2),
   (3, 3);

INSERT INTO "favorite" ("user_id", "activity_id")
   VALUES(1, 2),
   (2, 1),
   (3, 1);