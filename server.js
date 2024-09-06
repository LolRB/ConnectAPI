import routes from './routes/index.js';
import db from './config/connection.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}!`);
  });
});
