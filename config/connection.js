import { connect, connection } from 'mongoose';

const connectionString = 'mongodb://127.0.0.1:27017/connectAPI';

connect(connectionString);

export default connection;
