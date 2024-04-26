import express from "express";
import multer from "multer";
import { storage } from "./configuration/multerConfig";

const upload = multer({ storage });

const app = express();

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  return res.json({ message: "file uploaded successfully" });
});

app.listen(5000, () => console.log("listening on 5000"));
