const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Represents a model for managing cards.
 * @namespace modelComponent
 */
const modelComponent = {
  /**
   * Retrieves all cards from the database.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of client objects.
   */
  async getall() {
    const components = await prisma.repoComponents.findMany();
    return components;
  },

  /**
   * Retrieves a single card by their ID.
   *
   * @param {number} id - The ID of the client to retrieve.
   * @returns {Promise<object|Error>} A promise that resolves to the card object if found, or an error if an exception occurs.
   */
  async getOne(id) {
    try {
      return await prisma.repoComponents.findUnique({
        where: {
          componentId: parseInt(id),
        },
      });
    } catch (error) {
      return error;
    }
  },

};
module.exports = modelComponent;
