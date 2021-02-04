-- CREATE USER docker;
-- CREATE DATABASE docker;
-- GRANT ALL PRIVILEGES ON DATABASE docker TO postgres;

-- Table: public.Users

-- DROP TABLE public."Users";

CREATE TABLE public."Users"
(
    "User_Id" integer NOT NULL DEFAULT nextval('"Users_User_Id_seq"'::regclass),
    "Name" character varying COLLATE pg_catalog."default",
    "Password" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Users_pkey" PRIMARY KEY ("User_Id")
)

TABLESPACE pg_default;

ALTER TABLE public."Users"
    OWNER to postgres;