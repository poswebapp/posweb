import express from "express";
import { getTotals } from "../controlers/total.js";

const router = express.Router();
// import auth from '../middleware/auth.js'

router.get("/get", getTotals);

export default router;
