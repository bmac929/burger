CREATE DATABASE burgers_db;

use burgers_db;

create table burgers (
    id int NOT NULL auto_increment,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key(id)
);
