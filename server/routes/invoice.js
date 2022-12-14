import express from "express";
import {
  getInvoices,
  deleteInvoice,
  updateInvoice,
  uploadInvoice,
  getDailyTotal,
} from "../controlers/invoice.js";

const router = express.Router();
// import auth from '../middleware/auth.js'

router.get("/get", getInvoices);
router.get("/getDaily", getDailyTotal);
router.patch("/patch/:id", updateInvoice);
router.post("/upload", uploadInvoice);
router.delete("/delete/:id", deleteInvoice);

export default router;
