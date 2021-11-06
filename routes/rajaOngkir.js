import express from 'express';
import { getCities, getJNECost, getProvinces } from '../controllers/rajaOngkir.js';

const router = express.Router();

router.get('/provinces', getProvinces);
router.get('/cities', getCities);
router.post('/cost', getJNECost);

export default router;
