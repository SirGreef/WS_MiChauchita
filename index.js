const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const jsonData = {
  idBusiness: "1",
  name: "Doña Juanita",
  typeBusiness: "Bazar",
  attentionHours: [
    {
      opening: "09:00",
      closing: "21:00",
    },
  ],
  location: [
    {
      latitude: 19.878896756,
      longitude: 19.111883731,
    },
  ],
};

app.get("/data", (req, res) => {
  //   res.send("hello world");
  //   res.json(jsonData);
  const filePath = __dirname + "/data.json";

  // Leer el archivo JSON de manera asíncrona
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
      return;
    }

    // Enviar el contenido JSON como respuesta
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  });
});

app.use("/", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log("listo🚀! en el puerto: ", PORT);
});
