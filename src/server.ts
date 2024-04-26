import express from "express";
import multer from "multer";
import { storage } from "./configuration/multerConfig";

const upload = multer({ storage: storage });

const app = express();

app.use("/files", express.static("uploads"));

app.post("/upload", upload.single("file"), (req, res) => {
  return res.json({ message: "file uploaded successfully" });
});

app.listen(5000, () => console.log("listening on 5000"));
