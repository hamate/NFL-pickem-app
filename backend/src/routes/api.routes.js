import express from 'express';
import { eventsController } from '../controllers/eventsController';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/roundEvents/:roundNum', eventsController.getRoundEvents);

export default router;
