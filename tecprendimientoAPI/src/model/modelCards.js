const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Represents a model for managing cards.
 * @namespace modelCard
 */
const modelCard = {
  /**
   * Retrieves all cards from the database.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of client objects.
   */
  async getall() {
    const cards = await prisma.card.findMany();
    return cards;
  },

  /**
   * Retrieves a single card by their ID.
   *
   * @param {number} id - The ID of the client to retrieve.
   * @returns {Promise<object|Error>} A promise that resolves to the card object if found, or an error if an exception occurs.
   */
  async getOne(id) {
    try {
      return await prisma.card.findUnique({
        where: {
          cardId: parseInt(id),
        },
      });
    } catch (error) {
      return error;
    }
  },

  /**
   * Creates a new card in the database.
   *
   * @param {object} datacard - The card data.
   * @param {string} pathPhoto - The path to the card's photo.
   * @returns {Promise<object>} - A promise that resolves to the created card object.
   * @throws {Error} - If an error occurs while creating the card.
  //  */
  // async create(dataCard, pathPhoto) {
  //   try {
  //     const targetPath = pathPhoto;
  //     return await prisma.card.create({
  //       data: {
  //         firtsName: dataCard.firtsName,
  //         lastName: dataCard.lastName,
  //         country: dataCard.country,
  //         email: dataCard.email,
  //         phone: dataCard.phone,
  //         instagram: dataCard.instagram,
  //         linkedin: dataCard.linkedin,
  //         website: dataCard.website,
  //         photo: targetPath,
  //       },
  //     });
  //   } catch (error) {
  //     return error;
  //   }
  // },

  /**
   * Updates a client in the database.
   *
   * @param {number} id - The ID of the client to update.
   * @param {object} dataCard - The updated Card data.
   * @param {string} dataCard.firtsName - The updated first name of the Card.
   * @param {string} dataCard.lastName - The updated last name of the Card.
   * @param {string} dataCard.country - The updated country of the Card.
   * @param {string} dataCard.email - The updated email of the Card.
   * @param {string} dataCard.phone - The updated phone number of the Card.
   * @param {string} dataCard.instagram - The updated Instagram username of the Card.
   * @param {string} dataCard.linkedin - The updated LinkedIn username of the Card.
   * @param {string} dataCard.website - The updated website URL of the Card.
   * @param {string} dataCard.photo - The updated photo URL of the Card.
   * @returns {Promise<object|Error>} The updated Card object if successful, otherwise an error object.
   */
  async update(id, dataClient) {},

  /**
   * Deletes a client by their ID.
   *
   * @param {number} id - The ID of the client to delete.
   * @returns {Promise<object|Error>} - A promise that resolves to the deleted client object or an error object if an error occurs.
  */

  /*
  async delete(id) {
    try {
      const result = await prisma.card.delete({
        where: {
          userId: parseInt(id),
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  },
  */
};

module.exports = modelCard;
