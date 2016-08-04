create table products(
  id serial primary key not null,
  name varchar(70),
  description varchar(100),
  price money,
  type varchar(20)
);

create table car (
  id serial primary key not null,
  products_id int references products,
);
