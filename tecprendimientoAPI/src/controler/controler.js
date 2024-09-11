const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");
const modelClient = require("../model/modelClient.js");
const modelCards = require("../model/modelCards.js");
const modelComponent = require("../model/modelComponent.js");
const cli = require("nodemon/lib/cli/index.js");

// const users = controler.list;

/**
 * Controler object that contains methods for creating users.
 * @namespace controler
 */
const controler = {
  /**
   * Lists all users in the database.
   * @async
   * @method list
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a list of users.
   */
  async list(req, res) {
    try {
      // const clients = await prisma.client.findMany();
      const clients = await modelClient.getall();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ message: "Error al listar los usuarios" });
    }
  },

  /**
   * Retrieves a single client based on the provided ID.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with the client data or an error message.
   */
  async getOne(req, res) {
    const { userName } = req.params;

    try {
      const clients = await modelClient.getOne(userName);
      if (clients) {
        return res.status(200).json(clients);
      }
      return res.status(404).json({ message: "Usuario no encontrado" });
    } catch (error) {
      return res.status(500).json({ message: "Error al listar el usuario" });
    }
  },

  /**
   * Creates a new client in the database.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a success message or an error message.
   */
  async create(req, res) {
    const client = req.body;
    // console.log(client);
    const photo = req.files.photo;
    if (!photo) {
      return res.status(400).json({ message: "Imagen requerida" });
    }

    try {
      // const clientsLength = client.length

      const targetPath = path.join(
        // `https://api.tecprendimiento.com/uploads/${client.firtsName}_${client.lastName}.jpg`
        __dirname,
        `../uploads/${client.firtsName}_${client.lastName}.jpg`
      );
      photo.mv(targetPath, (err) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({ message: "Error al subir la imagen" });
        }
      });

      const fontendPath = `https://api.tecprendimiento.com/uploads/${client.firtsName}_${client.lastName}.jpg`

      const clientCreate = await modelClient.create(client, fontendPath);

      if (clientCreate) {
        return res.json({
          title: "Exito",
          message: `Usuario ${clientCreate.firtsName} creado con exito`,
          status: "success",
        });
      }
    } catch (error) {
      return res.json({
        title: "Error",
        message:
          "Error al crear usuario es posible que algunos de estos datos: correo, instagram, linkeding o telefono ya existan en la base de datos",
        status: "error",
        error: error,
      });
    }
  },

  /**
   * Updates a client in the database.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a success message or an error message.
   */

  async update(req, res) {
    const { id } = req.params;
    const client = req.body;

    const targetPath = { path: req.body.Photo };

    const frontendPath = `https://api.tecprendimiento.com/uploads/${client.firtsName}_${client.lastName}.jpg`

    // si se llega una foto por la req  subela y reemplaza la antigua
    if (req.files) {
      const photo = req.files.photoNew;
	  targetPath.path = path.join(
       __dirname,
        //`https://api.tecprendimiento.com/uploads/${client.firtsName}_${client.lastName}.jpg`
       `../uploads/${client.firtsName}_${client.lastName}.jpg`
      );	
      photo.mv(targetPath.path, (err) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({ message: "Error al subir la imagen" });
        }
      });
    }

    try {
      await prisma.client
        .update({
          where: {
            userId: parseInt(id),
          },
          data: {
            firtsName: client.firtsName,
            lastName: client.lastName,
            // country: client.country,
            email: client.email,
            phone: client.phone,
            instagram: client.instagram,
            linkedin: client.linkedin,
            website: client.website,
            // photo: targetPath.path,
            photo: frontendPath,
            description: client.description,
            spotify: client.spotify,
            facebook: client.facebook,
            youtube: client.youtube,
            x: client.x,
            tiktok: client.tiktok,
            twitch: client.twitch,
            idCard: parseInt(client.idCard),
            map: client.map,
            myfile: client.myfile,
            userName: client.userName,
          },
        })
        .then((result) => {
          return res.json({
            title: "Exito",
            message: "Usuario actualizado con exito",
            status: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({
            title: "Error",
            message: "Error usuario no encontradon, valide el id",
            status: "error",
          });
        });
    } catch (error) {
      return res.json({
        title: "Error",
        message: "Error al actualizar el usuario",
        status: "error",
      });
    }
  },

  /**
   * Deletes a client from the database.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} The response object with a success message or an error message.
   */

  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await modelClient.delete(id);
      if (result)
        return res.json({
          title: "Exito",
          message: "Usuario eliminado",
          status: "success",
        });
    } catch (error) {
      return res.json({
        title: "Error",
        message: `Error al eliminar el usuario valide  que el userId sea correcto`,
        status: "error",
      });
    }
  },

  /* ------------------------------  images  --------------------------------------  */

  // async getImage(req, res) {

  //   let {nameImg} = req.params;
  //   console.log(nameImg);
  //   console.log(__dirname);

  //   try {
  //     const imagePath = path.join(__dirname, '/src/uploads', `${nameImg}`);
  //     console.log(imagePath);
  //     return res.sendFile(imagePath);

  //   } catch (error) {
  //     return res
  //       .status(500)
  //       .json({ message: "Error al traer las imagenes", error: error.message });
  //   }
  // },

  /* ------------------------------  components  and cards --------------------------------------  */

  async getAllcards(req, res) {
    try {
      const cards = await modelCards.getall();
      return res.status(200).json(cards);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al traer los cards", error: error.message });
    }
  },

  async getOneCard(req, res) {
    const { id } = req.params;
    try {
      const card = await modelCards.getOne(id);
      if (card) {
        return res.status(200).json(card);
      }
      return res.status(404).json({ message: "Card no encontrada" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al listar el card", error: error.message });
    }
  },

  async getAllcomponents(req, res) {
    try {
      const components = await modelComponent.getall();
      return res.status(200).json(components);
    } catch (error) {
      return res.status(500).json({
        message: "Error al listar los componentes",
        error: error.message,
      });
    }
  },

  async getOneComponent(req, res) {
    const { id } = req.params;

    try {
      const component = await modelComponent.getOne(id);

      if (component) {
        return res.status(200).json(component);
      }
      return res.status(404).json({ message: "componente no encontrado" });
    } catch (error) {
      return res.status(500).json({
        message: "Error al traer los componentes",
        error: error.message,
      });
    }
  },
};

module.exports = controler;
