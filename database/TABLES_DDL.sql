-- DDL for table that stores survey result
CREATE TABLE survey_result (
	id 			serial PRIMARY KEY NOT NULL,
	gender 		VARCHAR (10) NOT NULL,
	age_group	VARCHAR (10) NOT NULL,
	location 	VARCHAR (20) NOT NULL,
	occupation 	VARCHAR (100) NOT NULL,
	take_photo	VARCHAR (5) NOT NULL,
	use_insta	VARCHAR (5) NOT NULL,
	email		VARCHAR (50) NOT NULL
);