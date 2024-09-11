const express = require("express");
const router = require("./src/router/router.js");
const dotev = require("dotenv");
const cors = require('cors');
const fileupload = require("express-fileupload");

dotev.config();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use('/uploads', express.static( __dirname + '/src/uploads'));
app.use(fileupload({createParentPath: true}));
app.use(express.json());
app.use(express.text());

app.use(router);

// endpoints y metodo para servir las imagenes
router.get("/uploads/:nameImg", (req, res) => {
  const { nameImg } = req.params;
  return res.sendFile(path.join(__dirname, `../src/uploads/${nameImg}`));
});


app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
