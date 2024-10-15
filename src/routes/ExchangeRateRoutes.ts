import { Router } from 'express';
import { ExchangeRateController } from '../controllers';

const exchangeRateRouter = Router();

exchangeRateRouter.route('/').post(ExchangeRateController.create);
exchangeRateRouter.route('/:exchangeRateId').get(ExchangeRateController.read);
exchangeRateRouter.route('/').get(ExchangeRateController.list);
exchangeRateRouter
  .route('/:exchangeRateId')
  .delete(ExchangeRateController.delete);

export default exchangeRateRouter;
