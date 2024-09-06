import { Schema, Types } from 'mongoose';
import dateFormat from '../utils/dateFormat.js';

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: [true, 'Reaction body is required'],
      maxlength: 280,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    versionKey: false, 
  }
);

export default reactionSchema;
