--aqui estan todos los comandos 
--de PostgreSQL usados en el desarrollo del proyecto

--crear la base de datos Biblioteca
CREATE DATABASE Biblioteca;

--Usar la Base de Datos Biblioteca
--\c Biblioteca; ejecutar en la consola de psql

--crear las tablas

-- tabla usuarios
    -- ID_usuario uuid PRIMARY KEY DEFAULT
    -- uuid_generate_v4(),
CREATE TABLE usuarios(
    id_usuario INT PRIMARY KEY NOT NULL,
    clave VARCHAR(255) NOT NULL,
    ap_paterno VARCHAR(100),
    ap_materno VARCHAR(100),
    nombres VARCHAR(200),
    correo VARCHAR(200),
    tipo_usuario BOOLEAN NOT NULL,
    acceso_total BOOLEAN NOT NULL
);

--Para poder generar codigos UUID, primero se debe ejecutar este comando
--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--Comando para crear la tabla libros
CREATE TABLE libros(
    id_libro uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    titulo VARCHAR (255) NOT NULL,
    descripcion varchar (512) NOT NULL,
    autor VARCHAR (255) NOT NULL,
    año_publicacion INT NOT NULL,
    editorial VARCHAR (255) NOT NULL,
    archivo VARCHAR (255) NOT NULL,
    portada VARCHAR (255) NOT NULL,
    visibilidad BOOLEAN NOT NULL
);

--Comando para crear la tabla tesis
CREATE TABLE tesis(
    id_tesis uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    titulo VARCHAR (255) NOT NULL,
    descripcion varchar (512) NOT NULL,
    autor VARCHAR (255) NOT NULL,
    año_publicacion INT NOT NULL,
    archivo VARCHAR (255) NOT NULL,
    caratula VARCHAR (255) NOT NULL,
    visibilidad BOOLEAN NOT NULL
);

--Comando para crear la tabla imagenes
CREATE TABLE imagenes(
    id_imagen uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    titulo VARCHAR (255) NOT NULL,
    descripcion varchar (512) NOT NULL,
    autor VARCHAR (255) NOT NULL,
    año_publicacion INT NOT NULL,
    archivo VARCHAR (255) NOT NULL,
    visibilidad BOOLEAN NOT NULL
);

--comando para crear la tabla lectura
CREATE TABLE lecturas(
    id_lectura uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    fecha_lectura DATE,
    hora_lectura TIME,
    id_usuario int,
    id_archivo uuid,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario),
    FOREIGN KEY (id_archivo) REFERENCES libros (id_libro), 
    FOREIGN KEY (id_archivo) REFERENCES tesis (id_tesis),
    FOREIGN KEY (id_archivo) REFERENCES imagenes (id_imagen)  
);

--comando para crear la tabla de comentarios
CREATE TABLE comentarios(
    id_comentario uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    comentario VARCHAR (512)
);

--comando para crear la tabla etiquetas
CREATE TABLE etiquetas(
    id_etiqueta uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    etiqueta VARCHAR (16)
);

--comando para crear la tabla de la relacion comentario-usuario
CREATE TABLE comentario_usuario(
    id_usuario int,
    id_comentario uuid,
    id_archivo uuid,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario),
    FOREIGN KEY (id_comentario) REFERENCES comentarios (id_comentario),
    FOREIGN KEY (id_archivo) REFERENCES libros (id_libro),
    FOREIGN KEY (id_archivo) REFERENCES tesis (id_tesis),
    FOREIGN KEY (id_archivo) REFERENCES imagenes (id_imagen)
);

--comando para crear la tabla de relaion etiqueta-archivo
CREATE TABLE etiqueta_archivo(
    id_etiqueta uuid,
    id_archivo uuid,
    FOREIGN KEY (id_etiqueta) REFERENCES etiquetas (id_etiqueta),
    FOREIGN KEY (id_archivo) REFERENCES libros (id_libro),
    FOREIGN KEY (id_archivo) REFERENCES tesis (id_tesis),
    FOREIGN KEY (id_archivo) REFERENCES imagenes (id_imagen)
);
--insertar datos en la tabla usuarios
INSERT INTO usuarios (
    id_usuario, 
    clave, 
    ap_paterno, 
    ap_materno, 
    nombres, 
    correo,
    tipo_usuario,
    acceso_total
    ) VALUES (
        '11111',
        '12345', 
        'Ali', 
        'Fuertes', 
        'Gabo',
        'alisak@gmail.com',
        'false',
        'false'
);

-- Insertar nueva fila en la tabla libros
INSERT INTO libros (
    titulo,
    descripcion,
    autor,
    año_publicacion,
    editorial,
    archivo,
    portada
) VALUES (
    'Diccionario geologico',
    'Diccionario sobrte terminos usados en geologia',
    'Carlos Borja',
    '1995',
    'La Torre',
    'public/libros/diccionario.pdf',
    'public/portadas/diccionario_geologia.jpg'
);

--comando de ejemplo para insertar una nueva tesis
INSERT INTO tesis (
    titulo,
    descripcion,
    autor,
    año_publicacion,
    archivo,
    caratula
) VALUES (
    'Prospeccion de petroleo en Toropalca',
    'Investigacion de prospeccion de petroleo realizado en la comunidad de Toropalca',
    'Mickey Mouse',
    '2018',
    'public/libros/tesis147.pdf',
    'public/portadas/caratula147.jpg'
);

--insertar nueva etiqueta
INSERT INTO etiquetas (
    etiqueta
) values(
    'calculo'
);