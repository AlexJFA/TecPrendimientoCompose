-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_idCard_fkey`;

-- AlterTable
ALTER TABLE `Client` MODIFY `idCard` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_idCard_fkey` FOREIGN KEY (`idCard`) REFERENCES `card`(`cardId`) ON DELETE SET NULL ON UPDATE CASCADE;
