-- CreateTable
CREATE TABLE `Administrators` (
    `adminId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Administrators_email_key`(`email`),
    UNIQUE INDEX `Administrators_password_key`(`password`),
    PRIMARY KEY (`adminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `idCard` INTEGER NOT NULL,
    `firtsName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NOT NULL,
    `spotify` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `youtube` VARCHAR(191) NULL,
    `x` VARCHAR(191) NULL,
    `tiktok` VARCHAR(191) NULL,
    `twitch` VARCHAR(191) NULL,

    UNIQUE INDEX `Client_photo_key`(`photo`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `card` (
    `cardId` INTEGER NOT NULL AUTO_INCREMENT,
    `backgroundColor` VARCHAR(191) NOT NULL,
    `avatarStyle` VARCHAR(191) NOT NULL,
    `fontFamily` VARCHAR(191) NOT NULL,
    `colorTitle` VARCHAR(191) NOT NULL,
    `colorDescription` VARCHAR(191) NOT NULL,
    `fontSizeTitle` VARCHAR(191) NOT NULL,
    `fontSizeDescription` VARCHAR(191) NOT NULL,
    `colorFontButtons` VARCHAR(191) NOT NULL,
    `colorButtons` VARCHAR(191) NOT NULL,
    `hoverButtons` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cardId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repoComponents` (
    `componentId` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`componentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `component` (
    `compoId` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`compoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_idCard_fkey` FOREIGN KEY (`idCard`) REFERENCES `card`(`cardId`) ON DELETE RESTRICT ON UPDATE CASCADE;
