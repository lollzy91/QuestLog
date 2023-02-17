BEGIN TRANSACTION;

DROP TABLE IF EXISTS quests;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS repeat_type;

CREATE TABLE users (
    user_id serial NOT NULL,
    username varchar(50) NOT NULL,
    password_hash varchar(200) NOT NULL,
    CONSTRAINT PK_user PRIMARY KEY (user_id)
);
CREATE TABLE repeat_type (
    repeat_id serial NOT NULL,
    type_ varchar(50),
    CONSTRAINT PK_repeat PRIMARY KEY (repeat_id)
);
CREATE TABLE quests (
    quest_id serial NOT NULL,
    user_id int NOT NULL,
    repeat int NOT NULL,
    completion_date date,
    quest_name varchar(50) NOT NULL,
    description varchar(250),
    CONSTRAINT PK_quest PRIMARY KEY (quest_id),
    CONSTRAINT FK_users FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT FK_repeat FOREIGN KEY (repeat) REFERENCES repeat_type (repeat_id)
);



INSERT INTO repeat_type (type_) VALUES ('Daily');
INSERT INTO repeat_type (type_) VALUES ('Weekly');
INSERT INTO repeat_type (type_) VALUES ('Monthly');
INSERT INTO repeat_type (type_) VALUES ('Fixed');
INSERT INTO repeat_type (type_) VALUES ('Ongoing');

COMMIT;