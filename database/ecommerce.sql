-- MySQL dump 10.13  Distrib 9.7.1, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommercedb
-- ------------------------------------------------------
-- Server version	9.7.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--


--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `cart id` int DEFAULT NULL,
  `cart_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoku31bj8aghkhvh3k1xc78dca` (`cart id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  KEY `FKqkqmvkmbtiaqn2nfqf25ymfs2` (`product_id`),
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FKoku31bj8aghkhvh3k1xc78dca` FOREIGN KEY (`cart id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FKqkqmvkmbtiaqn2nfqf25ymfs2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--


--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `order id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKel72pkxaw7laofi4u22c8hevs` (`order id`),
  KEY `FKrxgrcm1d9ncpv4n2dkv0wni7t` (`order_id`),
  CONSTRAINT `FKel72pkxaw7laofi4u22c8hevs` FOREIGN KEY (`order id`) REFERENCES `orders_table` (`id`),
  CONSTRAINT `FKrxgrcm1d9ncpv4n2dkv0wni7t` FOREIGN KEY (`order_id`) REFERENCES `orders_table` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--


--
-- Table structure for table `orders_table`
--

DROP TABLE IF EXISTS `orders_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_date` datetime(6) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `user_id` int DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `razorpay_order_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_table`
--


--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Apple smartphone with A18 chip and OLED display','iphone 16',79999,29,'/images/iphone16.png',4.8,'Mobiles'),(2,'Premium Android smartphone with AI features','Samsung Galaxy S25',69999,30,'/images/samsungS25.png',4.7,'Mobiles'),(3,'Flagship smartphone with Snapdragon processor','One Plus 3',54999,20,'/images/oneplus13.png',4.6,'Mobiles'),(4,'Intel Core i7 laptop with 16GB RAM','Dell Inspiron 15',62999,15,'/images/dell15.png',4.4,'Laptops'),(5,'Lightweight laptop for work and study','HP Pavilion 14',58999,18,'/images/hp14.png',4.7,'Laptops'),(6,'Thin and powerful laptop with M3 chip','Apple MacBook Air M3',114999,10,'/images/applemacbook.png',4.5,'Laptops'),(7,'Noise-cancelling wireless headphones','Sony WH-1000XM5',24999,35,'/images/sony1000xm5.png',4.3,'Headphones'),(9,'Portable Bluetooth speaker with deep bass','JBL Flip 6',9999,28,'/images/jblflip.png',4.7,'Electronics'),(10,'Wireless ergonomic mouse','Logitech MX Master 3S',8999,40,'/images/logitechmx.png',4.4,'Electronics'),(11,'Advanced smartwatch with fitness tracking','Apple Watch Series 10',42999,20,'/images/applewatch.png',4.5,'Watches'),(12,'Smartwatch with health monitoring','Samsung Galaxy Watch 7',29999,22,'/images/samsungwatch.png',4.6,'Watches'),(13,'Comfortable running shoes','Nike Air Max 270',9999,50,'/images/nikeshoes.png',4.2,'Fashion'),(14,'Soft cotton casual t-shirt','Adidas Essentials T-Shirt',1499,100,'/images/adidastshirt.png',4.7,'Fashion'),(15,'Slim-fit denim jeans','Levi\'s 511 Jeans',2999,60,'/images/levisjeans.png',4.5,'Fashion'),(16,'Durable backpack for travel and college','Puma Sports Backpack',2499,20,'/images/pumabackpack.png',4.4,'Fashion'),(17,'Stainless steel analog wristwatch','Casio Edifice Watch',7999,40,'/images/casiowatch.png',4.8,'Watches'),(18,'DSLR camera with 24.1MP sensor','Canon EOS 1500D',44999,20,'/images/canoncamera.png',4.7,'Electronics'),(19,'E-reader with glare-free display','Kindle Paperwhite',14999,25,'/images/kindle.png',4.5,'Electronics'),(20,'Full HD Android Smart TV','Xiaomi Smart TV 43\"',26999,15,'/images/xiaomitv.png',4.8,'Electronics');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-06 21:19:28