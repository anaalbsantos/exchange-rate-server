import { z } from 'zod';

export const ExchangeRate = z.object({
  from: z.string({
    invalid_type_error: 'A moeda de origem deve ser uma string',
    required_error: 'A moeda de origem é obrigatória',
  }),
  to: z.string({
    invalid_type_error: 'A moeda de destino deve ser uma string',
    required_error: 'A moeda de destino é obrigatória',
  }),
  rate: z.number({
    invalid_type_error: 'A taxa de câmbio deve ser um número',
    required_error: 'A taxa de câmbio é obrigatória',
  }),
});

// export const UpdateExchangeRate = ExchangeRate.partial();
