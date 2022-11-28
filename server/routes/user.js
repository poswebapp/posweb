import express from 'express';
const router = express.Router();


import {login,resetPassword, resetPasswordOTP} from '../controlers/user.js';

router.post('/login', login);
router.post('/reset', resetPassword);
router.post('/resetOTP/:id', resetPasswordOTP);

export default router;
