import { eventsServices } from '../services';

export const eventsController = {
  async getRoundEvents(req, res, next) {
    const { roundNum } = req.params;
    try {
      const eventsData = await eventsServices.getRoundEvents(roundNum);
      res.status(200).json(eventsData);
    } catch (error) {
      next(error);
    }
  },
  async getAllLeagues(req, res, next) {
    try {
      const leaguesData = await eventsServices.getAllLeagues();
      res.status(200).json(leaguesData);
    } catch (error) {
      next(error);
    }
  },
};
