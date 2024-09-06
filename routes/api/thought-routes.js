import express from "express";
import {
  findThoughts,
  findSingleThought,
  addThought,
  modifyThought,
  removeThought,
  addReaction,
  deleteReaction,
} from "../../controllers/thought-controller.js";

const router = express.Router();

router.route("/")
  .get(findThoughts)
  .post(addThought);

router
  .route("/:thoughtId")
  .get(findSingleThought)
  .put(modifyThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions")
  .post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

export default router;
