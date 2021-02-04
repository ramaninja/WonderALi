-- Table: public.Products

-- DROP TABLE public."Products";

CREATE TABLE public."Products"
(
    "Product_Id" integer NOT NULL,
    "Price" double precision,
    "Name" character varying COLLATE pg_catalog."default",
    "Category" character varying COLLATE pg_catalog."default",
    CONSTRAINT "Products_pkey" PRIMARY KEY ("Product_Id")
)

TABLESPACE pg_default;

ALTER TABLE public."Products"
    OWNER to postgres;