USE twitter;
-- select all from users table
SELECT * FROM users
ORDER BY birthday DESC;
-- order all by descending birthday

-- select first name/tweets from users table
SELECT first_name, tweet FROM users
JOIN tweets ON users.id = tweets.user_id;
-- join tweets onto users

-- select all from users table
SELECT * FROM users
JOIN faves ON users.id = faves.user_id
JOIN tweets on tweets.id = faves.tweet_id; 

SELECT * FROM users
WHERE id > 2;

-- select all from tweets table
SELECT * FROM tweets
WHERE LENGTH(tweet) < 50;
-- show tweets with a length of < 50

SELECT * FROM tweets