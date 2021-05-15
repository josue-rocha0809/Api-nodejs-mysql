create database proyecto;

use proyecto;

create table productos (
id int not null auto_increment primary key,
nombre_pro varchar(40) not null,
marca_pro varchar(40) not null,
proveedor varchar(50),
precio double not null);

DESCRIBE productos;

create table proveedores (
id int not null auto_increment primary key,
nombre_prove varchar(40) not null,
direccion_prove varchar(40) not null,
cp_prove int not null,
telefono_prove bigint);

DESCRIBE proveedores;