-- Table: public.Basket

-- DROP TABLE public."Basket";

CREATE TABLE public."Basket"
(
    "Basket_Id" SERIAL,
    "User_Id" integer,
    "Product_Id" integer,
    CONSTRAINT "Basket_pkey" PRIMARY KEY ("Basket_Id")
)

TABLESPACE pg_default;

ALTER TABLE public."Basket"
    OWNER to postgres;