import express from 'express';
import { getGoods,deleteGood,updateGood, uploadGood } from '../controlers/good.js'

const router = express.Router();
// import auth from '../middleware/auth.js'


router.get('/get', getGoods);
router.patch('/patch/:id',updateGood);
router.post('/upload',uploadGood);
router.delete('/delete/:id',deleteGood);
 
export default router;
