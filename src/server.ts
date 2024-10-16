import 'dotenv/config';

import './env';
import app from './app';
import '@database';
import { startCronJob } from './services';

startCronJob();

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT || 3001}`,
  );
});
