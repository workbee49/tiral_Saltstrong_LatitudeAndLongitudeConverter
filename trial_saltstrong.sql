/*
 Navicat Premium Data Transfer

 Source Server         : MySql_bee
 Source Server Type    : MySQL
 Source Server Version : 100414 (10.4.14-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : trial_saltstrong

 Target Server Type    : MySQL
 Target Server Version : 100414 (10.4.14-MariaDB)
 File Encoding         : 65001

 Date: 01/09/2023 05:36:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for coords
-- ----------------------------
DROP TABLE IF EXISTS `coords`;
CREATE TABLE `coords`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lat` int NULL DEFAULT NULL,
  `lng` int NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of coords
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
