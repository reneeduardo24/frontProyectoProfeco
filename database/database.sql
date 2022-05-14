CREATE DATABASE db_profeco;

USE db_profeco;

CREATE TABLE reports (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tienda VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE reports;