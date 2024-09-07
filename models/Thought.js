import { Schema, model } from "mongoose";
import reactionSchema from "./Reaction.js";
import dateFormat from "../utils/formatDate.js";

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, "A thought is required!"],
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    versionKey: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions?.length || 0;
});

export default model("Thought", thoughtSchema);
