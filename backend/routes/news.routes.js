import express from "express";
import {
  getAllNews,
} from "../controllers/news.controller.js";
const router = express.Router();


router.get("/api/news", getAllNews);


export default router;
