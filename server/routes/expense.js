import express from "express";
import {
  getExpenses,
  deleteExpense,
  updateExpense,
  uploadExpense,
  getDailyTotal,
} from "../controlers/expense.js";

const router = express.Router();
// import auth from '../middleware/auth.js'

router.get("/get", getExpenses);
router.get("/getDaily", getDailyTotal);
router.patch("/patch/:id", updateExpense);
router.post("/upload", uploadExpense);
router.delete("/delete/:id", deleteExpense);

export default router;
