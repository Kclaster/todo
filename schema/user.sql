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

INSERT INTO users_list(`user`, `email`, `first_name`, `last_name`, `star_review`)
VALUE('Bob', 'bob@gmail.com', 'Bob', 'Builder', '4'),
('Dora', 'Dora@gmail.com', 'Dora', 'Explora', '5'),
('Jason', 'JasonTodd@gmail.com', 'Jason', 'Todd', '2'),
('Richard', 'RichRGrayson@gmail.com', 'Richard', 'Grayson', 3),
('Stephanie', 'Steph20@yahoo.com', 'Stephanie', 'Brown', 4),
('David', 'DavidZ1995@gmail.com', 'David', 'Zavimbe', 3),
('Cassandra', 'SilentCass@gmail,com', 'Cass', 'Cain', 1),
('Tim', 'HackThat@icloud.net', 'Tim', 'Drake', 2),
('Barbara', 'Babs@gmail.com', 'Barbara', 'Gordon', 3),
('Bruce', 'Darknight@icloud.net', 'Bruce', 'Wayne', 3),
('Talia', 'LeagueofMe@hotmail.com', 'Talia', 'Al-ghul', 1);


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

INSERT INTO todos(`userId`, `description`, `title`, `startingBid`, `minStar`, `expiration`)
VALUE('Bob', 'Please mow my front lawn', 'Mow Lawn', 20, 2, 'April 10'),
('Bob', 'Walk around the block', 'Dog Walking', 15, 3, 'April 10'),
('Dora', 'Take out my recyling', 'Sanitation expert', 10, 1, 'April 10'),
('Dora', 'Please find my pet Boots', 'Bounty hunter', 50, 40, 'April 10'),
('Dora', 'Pickup milk, cheese & sugar', 'Grocery Shopper', 15, 2, 'April 10'),
('Jason', 'Detail & wax my bike.', 'Automotive detail', 40, 5,'April 10'),
('Jason', 'Need help removing leaves from my pool', 'Pool cleaning', 20, 3,'April 10'),
('Jason', 'run my dry cleaning', 'Dry cleaning', 15, 2,'April 10'),
('Richard', 'Help me unmuck the stables', 'Cleaning stables', 55, 4, 'April 10'),
('Richard', 'Sweep up peanuts from the stadium', 'Floor sweeping', 35, 2,'April 10'),
('Richard', 'Hang up promotional flyers', 'Marketing', 10, 1,'April 10'),
('Barbara', 'Need help building a ramp', 'Woodworking', 25, 4,'April 10'),
('Barbara', 'Pack up my kitchen', 'Moving boxes', 15, 2,'April 10');




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


-- INSERT INTO users_list(`user`, `email`, `first_name`, `last_name`, `star_review`)
-- VALUE("bob", 'bob@gmail.com', 'bob', 'builder', 4);