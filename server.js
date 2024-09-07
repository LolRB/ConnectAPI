import express from 'express';
import router from './routes/index.js';
import db from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}!`);
  });
});
