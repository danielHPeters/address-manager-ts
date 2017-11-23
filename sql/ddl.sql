DROP DATABASE IF EXISTS m151;
CREATE DATABASE m151 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE m151;

CREATE TABLE IF NOT EXISTS address (
  id   SERIAL,
  city VARCHAR(255) NOT NULL,
  zip  VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS person (
  id          SERIAL,
  firstName   VARCHAR(255)    NOT NULL,
  lastName    VARCHAR(255)    NOT NULL,
  email       VARCHAR(150)    NOT NULL,
  birthDate   DATE            NOT NULL,
  fk_address  BIGINT UNSIGNED NOT NULL,
  fk_hometown BIGINT UNSIGNED NOT NULL,

  PRIMARY KEY (id),
  UNIQUE (email),
  FOREIGN KEY (fk_address) REFERENCES address (id),
  FOREIGN KEY (fk_hometown) REFERENCES address (id)
);
