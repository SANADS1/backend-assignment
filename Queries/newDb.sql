-- CREATING A NEW TABLE IN SQL

CREATE TABLE user (name VARCHAR(20), email VARCHAR(20), phone VARCHAR(20), password VARCHAR(255));

-- INSERTING A NEW ROW

INSERT INTO user VALUES ('Diane','Diane@test.com','+2349047834343','passwordTest1');

-- READ DATA FROM A TABLE

SELECT * FROM user;
SELECT name, email, phone FROM user;


-- UPDATING A ROW ON SQL

UPDATE user
SET name='Juan', emai = '', phone = '', password = ''
WHERE name="Diane";


-- DELETING A ROW FROM A TABLE

DELETE FROM user WHERE name= ""; 