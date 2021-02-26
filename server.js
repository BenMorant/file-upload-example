const multer = require("multer");
const upload = multer({ dest: "uploads/" });
var bodyParser = require("body-parser");

const express = require("express");

const app = express();

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use("/frontend", express.static(__dirname + "/frontend"));

app.get("/", function (req, res, next) {
  res.redirect("frontend/index.html");
});

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
  console.dir(req.body);
  console.log(req.files);
  res.json({ message: "Fichiers téléversés avec succès !" });
}

app.listen(5000, () => {
  console.log(`Serveur démarré...`);
});
