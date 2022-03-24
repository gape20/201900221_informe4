CREATE DATABASE IF NOT EXISTS INFORME4;
Create table usuario(
idUsuario int,
nombre varchar(30),
apellido varchar(30),
contraseña varchar(20),
correo varchar(30),
primary key(idUsuario)
);

create table curso(
idCurso int,
nombre varchar(20),
primary key(idCurso)
);

create table publicacion(
idUsuario int,
idCurso int,
texto varchar(150),
fecha date,
foreign key(idUsuario) references Usuario(idUsuario),
foreign key(idCurso) references curso(idCurso)
);

create table catedratico(
idCatedratico int,
nombre varchar(20),
idCurso int,
foreign key(idCurso) references	curso(idCurso)
);

create table comentario(
idUsuario int,
texto varchar(200),
foreign key(idUsuario) references Usuario(idUsuario)
);

select * from Usuario;
select * from curso;
select * from catedratico;
select * from comenatrio;
DELIMITER
    $$
CREATE PROCEDURE sp_AgregarCatedratico(
    IN idCatedratico INT,
    IN nombre VARCHAR(20),
    IN idCurso INT
)
BEGIN
    INSERT INTO catedratico(
        idCatedratico ,
        nombre ,
        idCurso
    )
VALUES(
    idCatedratico ,
        nombre ,
        idCurso
) ; END $$