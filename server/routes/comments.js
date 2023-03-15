/** @format */

import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create comment
router.post("/", verifyToken, addComment);

//Delete comment
router.delete("/:id", verifyToken, deleteComment);

//Get comment
router.get("/:videoId", getComment);

export default router;
