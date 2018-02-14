-- MySQL Functions

-- CONCAT()
SELECT CONCAT('Mr.', ' ', first_name, ' ', last_name) AS full_name FROM users;
-- CONCAT_WS()
SELECT CONCAT_WS('first', first_name, last_name, 'last') AS full_name FROM users;
-- LENGTH()
SELECT LENGTH(last_name) AS last_len FROM users;
-- LOWER()
SELECT LOWER(first_name) AS first_lowercase FROM users;

-- Date
-- HOUR()
SELECT HOUR(created_at) AS date_hour, created_at FROM users;
-- DAYNAME
SELECT DAYNAME(created_at) AS day_name, created_at FROM users;
-- MONTH()
SELECT MONTH(created_at) AS month_number, created_at FROM users;
-- NOW()
SELECT NOW() AS right_now;
-- DATE_FORMAT()
SELECT DATE_FORMAT(created_at, '%W, %M %e, %Y')FROM users;
-- SELECT * FROM users