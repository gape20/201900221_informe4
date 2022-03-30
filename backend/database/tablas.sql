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
idPublicacion int primary key AUTO_INCREMENT,
idUsuario int,
idCurso int,
texto varchar(150),
fecha date,
foreign key(idUsuario) references Usuario(idUsuario),
foreign key(idCurso) references curso(idCurso)
);

create table catedratico(
idCatedratico int primary key,
nombre varchar(20),
idCurso int,
foreign key(idCurso) references	curso(idCurso)

);

create table comentario(
idComentario int primary key AUTO_INCREMENT,
idUsuario int,
texto varchar(200),
foreign key(idUsuario) references Usuario(idUsuario)
);

select * from Usuario;
select * from curso;
select * from catedratico;
select * from comenatrio;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AgregarCatedratico`(
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
) ; END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AgregarComentario`(IN `idComentario` INT, IN `idUsuario` INT, IN `texto` VARCHAR(400))
BEGIN
    INSERT INTO comentario(
        idComentario ,
        idUsuario ,
        texto
    )
VALUES(
        idComentario ,
        idUsuario ,
        texto
) ; END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AgregarCurso`(IN `idCurso` INT, IN `nombre` VARCHAR(50))
BEGIN
    INSERT INTO curso(
        idCurso ,
        nombre
    )
VALUES(
    	idCurso ,
        nombre
) ; END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AgregarPublicacion`(IN `idPublicacion` INT, IN `idUsuario` INT, IN `idCurso` INT, IN `texto` VARCHAR(500), IN `fecha` DATE)
BEGIN
INSERT INTO publicacion(
        idPublicacion ,
        idUsuario ,
        idCurso ,
    	texto ,
    	fecha 
    )
VALUES(
    	idPublicacion ,
        idUsuario ,
        idCurso ,
    	texto ,
    	fecha 
) ; END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AgregarUsuario`(IN `idUsuario` INT, IN `nombre` VARCHAR(40), IN `apellido` VARCHAR(40), IN `contraseña` VARCHAR(40), IN `correo` VARCHAR(40))
BEGIN
    INSERT INTO usuario(
        idUsuario ,
        nombre ,
        apellido ,
        contraseña ,
        correo
    )
VALUES(
    	idUsuario ,
        nombre ,
        apellido ,
        contraseña ,
        correo
) ; END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EditarCatedratico`(IN `_idCatedratico` INT, IN `_nombre` VARCHAR(20), IN `_idCurso` INT)
BEGIN
    UPDATE catedratico
        SET nombre = _nombre, idCurso = _idCurso
 		WHERE idCatedratico = _idCatedratico; 
        END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EditarCurso`(IN `_idCurso` INT, IN `_nombre` VARCHAR(40))
BEGIN
    UPDATE curso
        SET idCurso = _idCurso, nombre = _nombre
 		WHERE idCurso = _idCurso; 
        END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EditarPublicacion`(IN `_idPublicacion` INT, IN `_idUsuario` INT, IN `_idCurso` INT, IN `_texto` VARCHAR(500), IN `_fecha` DATE)
BEGIN
    UPDATE publicacion
        SET texto = _texto, fecha = _fecha
 		WHERE idPublicacion = _idPublicacion; 
        END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EditarUsuario`(IN `_idUsuario` INT, IN `_nombre` VARCHAR(40), IN `_apellido` VARCHAR(40), IN `_contraseña` VARCHAR(40), IN `_correo` VARCHAR(40))
BEGIN
    UPDATE usuario
        SET nombre = _nombre, apellido = _apellido, contraseña = _contraseña, correo = _correo
 		WHERE idUsuario = _idUsuario; 
        END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EliminarCatedratico`(IN `_idCatedratico` INT)
BEGIN
    DELETE FROM catedratico WHERE idCatedratico = _idCatedratico;
    END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EliminarPublicacion`(IN `_idPublicacion` INT)
BEGIN
    DELETE FROM publicacion WHERE idPublicacion = _idPublicacion;
    END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EliminarUsuario`(IN `_idUsuario` INT)
BEGIN
	DELETE FROM usuario WHERE idUsuario = _idUsuario;
    END$$
DELIMITER ;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_EliminarCurso`(IN `_idCurso` INT)
BEGIN
	DELETE FROM curso WHERE idCurso = _idCurso;
    END$$
DELIMITER ;
