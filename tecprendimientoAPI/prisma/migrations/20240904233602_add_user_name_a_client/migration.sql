/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Client` ADD COLUMN `userName` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Client_userName_key` ON `Client`(`userName`);
