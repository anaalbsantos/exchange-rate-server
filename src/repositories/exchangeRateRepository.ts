import { Prisma, ExchangeRate } from '@prisma/client';
import prisma from '@database';

class ExchangeRateRepository {
  async create(data: Prisma.ExchangeRateCreateInput): Promise<ExchangeRate> {
    const exchangeRate = await prisma.exchangeRate.create({ data });
    return exchangeRate;
  }

  async findById(id: string): Promise<ExchangeRate | null> {
    const exchangeRate = await prisma.exchangeRate.findUnique({
      where: { id },
    });
    return exchangeRate;
  }

  async findAll(): Promise<ExchangeRate[]> {
    const exchangeRates = await prisma.exchangeRate.findMany();
    return exchangeRates;
  }

  async delete(id: string): Promise<ExchangeRate> {
    const exchangeRate = await prisma.exchangeRate.delete({ where: { id } });
    return exchangeRate;
  }
}

export default new ExchangeRateRepository();
