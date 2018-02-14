-- 1. What query would you run to get all tweets from the user id of 1?
SELECT * FROM users
LEFT JOIN tweets ON users.id = tweets.user_id
WHERE users.id = 1;
-- just tweets
SELECT tweets.tweet FROM users
LEFT JOIN tweets ON users.id = tweets.user_id
WHERE users.id = 1;
-- rename the output column that you want as kobe_tweets
SELECT tweets.tweet as kobe_tweets FROM users
LEFT JOIN tweets ON users.id = tweets.user_id
WHERE users.id = 1;
-- 2. What query would return all the tweets that the user with id 2 has tagged as favorites?
SELECT first_name, tweet FROM users
LEFT JOIN faves ON users.id = faves.user_id
LEFT JOIN tweets ON faves.tweet_id = tweets.id
WHERE users.id = 2;
-- 3. What query would you run to get all the tweets that user with id 2, or user with id 1, has tagged as favorites?
SELECT first_name, tweet FROM users 
LEFT JOIN faves ON users.id = faves.user_id 
LEFT JOIN tweets ON faves.tweet_id = tweets.id
WHERE users.id = 1 OR users.id = 2;
-- 4. What query would you run to get all the users that are following the user with id 1?
SELECT users.first_name as followed, users2.first_name as follower FROM users
LEFT JOIN follows ON users.id = follows.followed_id
LEFT JOIN users as users2 ON users2.id = follows.follower_id
WHERE users.id = 1;
-- 5. What query would you run to get all users that are not following the user with id of 2?
SELECT * FROM users
WHERE users.id NOT IN (
SELECT follower_id FROM follows
WHERE followed_id = 2 ) AND users.id != 2;

SELECT users.first_name as user, COUNT(users2.first_name) as follower_count FROM users
LEFT JOIN follows ON users.id = follows.followed_id
LEFT JOIN users as users2 ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id;
-- left join
SELECT first_name, tweet FROM users
LEFT JOIN tweets ON users.id = tweets.user_id;
-- excludes unmatched
SELECT first_name, tweet FROM users
JOIN tweets ON users.id = tweets.user_id