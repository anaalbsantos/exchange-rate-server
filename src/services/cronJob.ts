import cron from 'node-cron';
import axios from 'axios';
import { ExchangeRateRepository } from '@repositories';

export function startCronJob() {
  cron.schedule('0 * * * *', () => {
    // run every hour
    async function getExchangeRate() {
      try {
        // send a request to the API to get the exchange rate
        const exchangeRate = await axios.get(
          'https://api.apilayer.com/fixer/latest',
          {
            params: {
              base: 'BRL',
              symbols: 'USD',
            },
            headers: {
              apikey: process.env.API_KEY,
            },
          },
        );

        // save the exchange rate to the database
        await ExchangeRateRepository.create({
          from: 'BRL',
          to: 'USD',
          rate: exchangeRate.data.rates.USD,
        });

        console.log('Exchange rate saved');
      } catch (error) {
        console.error(error);
      }
    }

    getExchangeRate();
  });

  console.log('Cron job started');
}
