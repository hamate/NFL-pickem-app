import { loginService } from '../services/loginService';

export const loginController = {
  async post(req, res, next) {
    const { password, username } = req.body;
    try {
      const login = await loginService.getToken(username, password);
      const token = login[0];
      const userid = login[1];
      res.status(200).json({
        status: 'ok',
        token,
        userid,
        username,
      });
    } catch (error) {
      next(error);
    }
  },
};
