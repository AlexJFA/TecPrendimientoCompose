const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Represents a model for managing clients.
 * @namespace modelClient
 */
const modelClient = {
  /**
   * Retrieves all clients from the database.
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of client objects.
   */
  async getall() {
    const clients = await prisma.client.findMany();
    return clients;
  },

  /**
   * Retrieves a single client by their ID.
   *
   * @param {string} userName - The ID of the client to retrieve.
   * @returns {Promise<object|Error>} A promise that resolves to the client object if found, or an error if an exception occurs.
   */
  async getOne(userName) {
    try {
      return await prisma.client.findUnique({
        where: {
          userName: userName,
        },
      });
    } catch (error) {
      return error;
    }
  },

  /**
   * Creates a new client in the database.
   *
   * @param {object} dataClient - The client data.
   * @param {string} pathPhoto - The path to the client's photo.
   * @returns {Promise<object>} - A promise that resolves to the created client object.
   * @throws {Error} - If an error occurs while creating the client.
   */
  async create(dataClient, pathPhoto) {
    try {
      const targetPath = pathPhoto;
      return await prisma.client.create({
        data: {
          firtsName: dataClient.firtsName,
          lastName: dataClient.lastName,
          // country: dataClient.country,
          email: dataClient.email,
          phone: dataClient.phone,
          instagram: dataClient.instagram,
          linkedin: dataClient.linkedin,
          website: dataClient.website,
          photo: targetPath,
          description: dataClient.description,
          spotify: dataClient.spotify,
          facebook: dataClient.facebook,
          youtube: dataClient.youtube,
          x: dataClient.x,
          tiktok: dataClient.tiktok,
          twitch: dataClient.twitch,
          idCard: parseInt(dataClient.idCard),
          map: dataClient.map,
          myfile: dataClient.myfile,
          userName: dataClient.userName,
        },
      });
    } catch (error) {
      return error;
    }
  },

  /**
   * Updates a client in the database.
   *
   * @param {number} id - The ID of the client to update.
   * @param {object} dataClient - The updated client data.
   * @param {string} dataClient.firtsName - The updated first name of the client.
   * @param {string} dataClient.lastName - The updated last name of the client.
   * @param {string} dataClient.country - The updated country of the client.
   * @param {string} dataClient.email - The updated email of the client.
   * @param {string} dataClient.phone - The updated phone number of the client.
   * @param {string} dataClient.instagram - The updated Instagram username of the client.
   * @param {string} dataClient.linkedin - The updated LinkedIn username of the client.
   * @param {string} dataClient.website - The updated website URL of the client.
   * @param {string} dataClient.photo - The updated photo URL of the client.
   * @returns {Promise<object|Error>} The updated client object if successful, otherwise an error object.
   */
  async update(id, dataClient) {},

  /**
   * Deletes a client by their ID.
   *
   * @param {number} id - The ID of the client to delete.
   * @returns {Promise<object|Error>} - A promise that resolves to the deleted client object or an error object if an error occurs.
   */
  async delete(id) {
    try {
      const result = await prisma.client.delete({
        where: {
          userId: parseInt(id),
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  },
};
module.exports = modelClient;
