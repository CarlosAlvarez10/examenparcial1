-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS examen_parcial;
USE examen_parcial;

-- Crear la tabla Usuario
CREATE TABLE IF NOT EXISTS Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    edad INT NULL
);

-- Insertar datos en la tabla Usuario
INSERT INTO Usuario (nombre, email, edad) VALUES 
('Juan Pérez', 'juan.perez@example.com', 28),
('María López', 'maria.lopez@example.com', 32),
('Carlos García', 'carlos.garcia@example.com', 25),
('Ana Fernández', 'ana.fernandez@example.com', 30),
('Luis Ramírez', 'luis.ramirez@example.com', NULL);
