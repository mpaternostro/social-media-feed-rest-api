import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { userEndpoints } from "./modules/user/endpoints";
import { sequelize } from "./utils/database";

dotenv.config();

const app = express();
const port = 8080;

const upload = multer();

app.use(upload.none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/users", userEndpoints);

void sequelize.sync().then(() => {
  app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
  );
});
