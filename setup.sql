DROP TABLE IF EXISTS users_cards_lists;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS lists;

CREATE TABLE lists
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO lists
  (name)
VALUES
  ('Backlogs'),
  ('A faire'),
  ('En cours'),
  ('Fait');

CREATE TABLE cards
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO cards
  (name)
VALUES
  ('Connecter l''appli à la BDD'),
  ('Faire une requête SQL'),
  ('Faire une relation one to many'),
  ('Faire une relation many to many'),
  ('Faire une appli NodeJS'),
  ('Créer des routes d''API'),
  ('Créer la web pour interroger l''API');

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  lastname varchar(255),
  firstname varchar(255),
  email varchar(255),
  password varchar(255),
  role varchar(255)
);

INSERT INTO users
  (firstname, lastname, email, password, role)
VALUES
  ('David', 'Ostermann', 'do@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'admin'),
  ('Faustino', 'Kialungila', 'fk@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Paljor', 'Tsang', 'pt@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Gaelle', 'Meric', 'gm@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Joffrey', 'Gitau', 'jg@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Mehdi', 'Druon', 'md@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Martin', 'Eon', 'me@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user'),
  ('Julien', 'Grach', 'jgr@do.do', '$2a$05$d7uK3TP/zyM2CMCKJ/DnBesHYWyEnVvxzgWxULKKA0tAtcb/Unqma', 'user');

CREATE TABLE users_cards_lists
(
  user_id integer REFERENCES users ON DELETE CASCADE,
  card_id integer REFERENCES cards ON DELETE CASCADE,
  list_id integer REFERENCES lists ON DELETE SET NULL,
  PRIMARY KEY (user_id, card_id)
);

INSERT INTO users_cards_lists
  (user_id, card_id, list_id)
VALUES
  (1, 3, 1),
  (1, 1, 1),
  (1, 7, 1),
  (2, 1, 1),
  (3, 4, 1),
  (3, 5, 1),
  (5, 2, 1),
  (5, 3, 1),
  (6, 6, 1),
  (6, 4, 1),
  (7, 7, 1),
  (8, 2, 1),
  (8, 3, 1),
  (8, 6, 1);