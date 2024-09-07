import  pgk from 'mongoose';
const { connect, connection } = pgk;

const connectionString = 'mongodb://127.0.0.1:27017/connectAPI';

connect(connectionString);

export default connection;
