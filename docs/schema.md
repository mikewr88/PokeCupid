# Schema Information


## pokemon
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
poke_name   | string    | not null
type        | string    | not null
description | string    |
image_url   | string    | 
user_id     | integer   | not null, foreign key (references users), indexed

## visitors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
trainer_type    | string    | not null
description     | string    |
location        | string    | not null
image_url       | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
