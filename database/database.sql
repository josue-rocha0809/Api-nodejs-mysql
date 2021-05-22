create database proyecto;

use proyecto;


create table proveedores (
id int not null auto_increment primary key,
nombre_prove varchar(40) not null,
direccion_prove varchar(40) not null,
cp_prove int not null,
telefono_prove bigint
);

create table productos (
id int not null auto_increment primary key,
nombre_pro varchar(40) not null,
marca_pro varchar(40) not null,
id_proveedor int not null,
precio double not null,
foreign key (id_proveedor) references proveedores(id)
);

create table inventario(
    id_producto int not null,
    cantidad_disp int not null,
    foreign key (id_producto) references productos(id)
    );

create table entradas(
    id int not null auto_increment primary key,
    id_producto int not null,
    cantidad_de_ingreso int not null,
    fecha fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_producto) references productos(id)
    );

create table ventas(
    id int not null auto_increment primary key,
    cantidad_de_productos int not null,
    fecha fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total bigint
);

create table venta_producto(
    id_venta int not null,
    id_producto int not null,
    cantidad_de_producto int not null,
    foreign key (id_venta) references ventas(id),
    foreign key (id_producto) references productos(id)
);

create table usuarios(
    id int not null auto_increment primary key,
    nombre varchar(100) not null,
    apellidos varchar(100) not null,
    direccion varchar(50) not null,
    cp int not null,
    telefono bigint not null,
    cargo varchar(40) not null,
    horario varchar(40) not null,
    correo varchar(100) not null,
    contra varchar(100) not null
);

