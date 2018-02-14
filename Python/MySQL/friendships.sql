USE friendships;
SELECT * FROM friendships;
SELECT * FROM users;

SELECT users.first_name, users.last_name, user2.first_name AS friend_first_name, user2.last_name AS friend_last_name FROM users
LEFT JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id;