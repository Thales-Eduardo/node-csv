import { Router } from "express";
import multer from "multer";
import { ReadFile } from "../service/ReadFile";

const router = Router();
const upload = multer();

router.patch("/arquivo", upload.single("arquivo"), async (req, res) => {
  const buffer = req.file?.buffer;

  const dados = new ReadFile();

  const DataFile = await dados.execute(buffer);

  return res.json(DataFile);
});

export { router };
