import { Request, Response, NextFunction } from 'express';
import { ExchangeRateRepository } from '../repositories';
import { ExchangeRate } from '@DTOs';

class ExchangeRateController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const echangeRateData = ExchangeRate.parse(req.body);

      const exchangeRate = await ExchangeRateRepository.create(echangeRateData);
      res.locals = {
        status: 201,
        message: 'Exchange Rate created',
        data: exchangeRate,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { exchangeRateId } = req.params;

      const exchangeRate = await ExchangeRateRepository.findById(
        exchangeRateId,
      );

      if (!exchangeRate) {
        return next({
          status: 404,
          message: 'Exchange Rate not found',
        });
      }

      res.locals = {
        status: 200,
        data: exchangeRate,
      };

      return next();
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const exchangeRates = await ExchangeRateRepository.findAll();
      res.locals = {
        status: 200,
        message: 'Exchange Rates listed',
        data: exchangeRates,
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { exchangeRateId } = req.params;

      const exchangeRate = await ExchangeRateRepository.delete(exchangeRateId);

      if (!exchangeRate) {
        return next({
          status: 404,
          message: 'Exchange Rate not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Exchange Rate deleted',
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new ExchangeRateController();
