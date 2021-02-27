INSERT INTO public."Users"("Name", "Password") VALUES ('Marcel', 'PIGNOUL');
INSERT INTO public."Users"("Name", "Password") VALUES ('Jean', 'DUJARDIN');
INSERT INTO public."Users"("Name", "Password") VALUES ('John', 'DOE');
INSERT INTO public."Users"("Name", "Password") VALUES ('Jimmy', 'BROWN');
INSERT INTO public."Users"("Name", "Password") VALUES ('Fabriste', 'PIERRE');

INSERT INTO public."Basket"("User_Id", "Product_Id") VALUES (1, 1);
INSERT INTO public."Basket"("User_Id", "Product_Id") VALUES (1, 2);
INSERT INTO public."Basket"("User_Id", "Product_Id") VALUES (2, 3);
INSERT INTO public."Basket"("User_Id", "Product_Id") VALUES (4, 13);
INSERT INTO public."Basket"("User_Id", "Product_Id") VALUES (5, 14);

INSERT INTO public."Products"("Price", "Name", "Category") VALUES ('5.99', 'Piment', 'Informatique');
INSERT INTO public."Products"("Price", "Name", "Category") VALUES ('6.99', 'PQ', 'Informatique');
INSERT INTO public."Products"("Price", "Name", "Category") VALUES ('55.99', 'Poitrine de Porc', 'Informatique');