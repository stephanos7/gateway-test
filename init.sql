-- initialize sql create tables

CREATE TABLE books (
  id SERIAL PRIMARY KEY
  , author VARCHAR(255) NOT NULL
  , title VARCHAR(255) NOT NULL
);

INSERT INTO books (author, title)
  VALUES ('John Middleton', 'Hello Hawai');

 
