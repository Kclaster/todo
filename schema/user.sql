CREATE DATABASE `users`;
USE users;

CREATE TABLE `users_list` (
  `id` mediumint(30) NOT NULL AUTO_INCREMENT,
  `user` mediumint(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO users_list(`user`, `email`, `first_name`, `last_name`)
VALUE(1234, 'test@gmail.com', 'Testy', 'Testers')