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
};
