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

create table usuarios(
    id int not null auto_increment primary key,
    nombre varchar(100) not null,
    contra varchar(100) not null 
    

);

apellidos varchar(100) not null,
    direccion varchar(50) not null,
    cp int not null,
    telefono bigint not null,
    cargo varchar(40) not null,
    horario varchar(40) not null,
    correo varchar(100) not null,
    
create table users(
    id int not null auto_increment primary key,
    username varchar(30) not null,
    password varchar(30) not null,
    role varchar (30) not null, 
);    