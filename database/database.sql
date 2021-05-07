create database proyecto;

use proyecto;

create table productos (
id int not null auto_increment primary key,
nombre_pro varchar(40) not null,
marca_pro varchar(40) not null,
proveedor varchar(50),
precio double not null);

DESCRIBE productos;