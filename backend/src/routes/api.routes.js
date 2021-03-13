import express from 'express';
import {
  eventsController,
  loginController,
  registrationController,
  leagueController,
} from '../controllers';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registrationController.post);
router.post('/login', loginController.post);
router.get('/roundEvents/:roundNum', eventsController.getRoundEvents);
router.get('/addLeague/', leagueController.addLeague);
router.get('/updateLeague/', leagueController.updateLeague);

export default router;
