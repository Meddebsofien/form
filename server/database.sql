
CREATE DATABASE user_data;


CREATE TABLE user_info (
    id SERIAL PRIMARY KEY,
    technologies TEXT[] NOT NULL,
    nb_hours INT NOT NULL,
    test TEXT NOT NULL,
    );
    

