-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 10:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Physics', '2023-10-03 10:14:54', '2023-10-03 10:14:57'),
(2, 'Maths', '2023-10-03 10:14:54', '2023-10-03 10:14:54');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `title` varchar(55) DEFAULT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL DEFAULT 0,
  `rating` int(11) NOT NULL DEFAULT 0,
  `instructor` varchar(50) DEFAULT NULL,
  `image` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `title`, `description`, `price`, `rating`, `instructor`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(18, 'React', 'React', 'Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis', 290, 4, 'Sachin Gupta', 'http://localhost:4000/uploads/reactjs.jpg', 1, '2023-10-03 18:17:36', '2023-10-03 18:17:36'),
(20, 'NodeJs', 'NodeJs', ' Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine', 300, 4, 'Karan Gupta', 'http://localhost:4000/uploads/nodejs.jpg', 1, '2023-10-03 18:21:14', '2023-10-03 18:21:14'),
(22, 'Nextjs.', 'Nextjs', 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.', 200, 3, 'Karan Raval', 'http://localhost:4000/uploads/next.jpg', 1, '2023-10-03 19:51:09', '2023-10-03 19:51:09'),
(23, 'MongoDB.', 'MongoDB', 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.', 250, 3, 'yoshita Jain', 'http://localhost:4000/uploads/mongodb.jpg', 2, '2023-10-03 19:52:29', '2023-10-03 19:52:29'),
(24, 'Angular.', 'Angular', 'Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications.', 200, 3, 'yoshita Sinha', 'http://localhost:4000/uploads/angu.jpg', 2, '2023-10-03 20:05:45', '2023-10-03 20:05:45'),
(25, 'Nestjs', 'Nestjs', 'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP.', 220, 3, 'Coder Dost', 'http://localhost:4000/uploads/nestjs.jpg', 2, '2023-10-03 20:08:56', '2023-10-03 20:08:56'),
(26, 'HTML', 'HTML', 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.', 220, 3, 'Thapa Tech', 'http://localhost:4000/uploads/html.jpg', 2, '2023-10-03 20:47:12', '2023-10-03 20:47:12'),
(27, 'CSS', 'CSS', 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.', 190, 3, 'george ', 'http://localhost:4000/uploads/css.jpg', 2, '2023-10-03 20:49:27', '2023-10-03 20:49:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Amit', '987654310', 'amit@gmail.com', 'H101 Sector 142 Noida U.P.', '2023-10-03 10:23:31', '2023-10-03 10:23:33'),
(2, 'Raj', '987654311', 'raj@gmail.com', 'H102 Sector 142 Noida U.P.', '2023-10-03 10:23:31', '2023-10-03 10:23:33'),
(3, 'alpha', '9876543210', 'alpha@gmail.com', 'H101 Sector 62 Noida', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'test', '35353543 noida', 'test@gmail.com', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'test1', '35353543 noida', 'test1@gmail.com', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'test2', '346454646 up', 'test2@gmail.com', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_course`
--

CREATE TABLE `user_course` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `progress` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_course`
--

INSERT INTO `user_course` (`id`, `user_id`, `course_id`, `progress`, `status`, `created_at`, `updated_at`) VALUES
(15, 1, 23, 60, 1, '2023-10-04 01:17:17', '2023-10-04 01:17:17'),
(16, 5, 22, 43, 1, '2023-10-04 11:22:50', '2023-10-04 11:22:50'),
(17, 6, 27, 55, 1, '2023-10-04 11:26:43', '2023-10-04 11:26:43'),
(18, 3, 25, 43, 1, '2023-10-04 11:28:44', '2023-10-04 11:28:44'),
(19, 2, 26, 20, 1, '2023-10-04 12:38:11', '2023-10-04 12:38:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_course_category` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_course`
--
ALTER TABLE `user_course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_user_course_users` (`user_id`),
  ADD KEY `FK_user_course_course` (`course_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_course`
--
ALTER TABLE `user_course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `FK_course_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_course`
--
ALTER TABLE `user_course`
  ADD CONSTRAINT `FK_user_course_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_user_course_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
