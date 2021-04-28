import express from 'express';
import {
  eventsController,
  loginController,
  registrationController,
  leagueController,
} from '../controllers';
import authHandler from '../middlewares/authHandler';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registrationController.post);
router.post('/login', loginController.post);

router.use(authHandler);

router.get('/roundEvents/:roundNum', eventsController.getRoundEvents);
router.get('/allLeagues', eventsController.getAllLeagues);
router.get('/addLeague/', leagueController.addLeague);
router.get('/updateLeague/', leagueController.updateLeague);

export default router;
