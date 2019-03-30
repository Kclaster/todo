DROP DATABASE IF EXISTS `users`;
CREATE DATABASE `users`;
USE `users`;

CREATE TABLE `users_list` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `star_review` integer(10),
  PRIMARY KEY (`id`)
);

INSERT INTO users_list(`user`, `email`, `first_name`, `last_name`)
VALUE(1234, 'test@gmail.com', 'Testy', 'Testers');

CREATE TABLE `todos` (
  `id` integer(40) NOT NULL AUTO_INCREMENT,
  `userId` varchar(60) NOT NULL,
  `description` varchar(300) NOT NULL,
  `title` varchar(40) NOT NULL,
  `startingBid` integer(20) NOT NULL,
  `minStar` integer(20) NOT NULL,
  `expiration` varchar(60) NOT NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO `todos`
(
`userId`,
`description`,
`title`,
`startingBid`,
`minStar`,
`expiration`)
VALUES("userId", "only the front lawn", "mow lawn", 10, 3, "july 2");

INSERT INTO `todos`
(
`userId`,
`description`,
`title`,
`startingBid`,
`minStar`,
`expiration`)
VALUES("userId", "only the front lawn", "fold laundry", 10, 3, "july 2");


CREATE TABLE `market` (
  `taskId` bigint(60) NOT NULL AUTO_INCREMENT,
  `userId` varchar(60) NOT NULL,
  `best_bid` int(30) NOT NULL,
  `best_bidderId` varchar(60),
  `expired` bool default false,
  `expiration_date` varchar(60) NOT NULL,
  `description` varchar(300) NOT NULL,
  `title` varchar(40) NOT NULL,
  `minStar` int(20) NOT NULL,
  PRIMARY KEY (`taskId`));

    INSERT INTO `users`.`market`
(
`userId`,
`best_bid`,
`best_bidderId`,
`expired`,
`expiration_date`,
`description`,
`title`,
`minStar`)
VALUES("hello",20, "3", false, "2019-04-03T22:07:43.137Z", "mowing the lawn", "Lawn stuff", 3)
