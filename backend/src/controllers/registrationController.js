import { registrationService } from '../services';

export const registrationController = {
  async post(req, res, next) {
    const { username, email, password } = req.body;
    try {
      const response = await registrationService.registerUser(username, email, password);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
};