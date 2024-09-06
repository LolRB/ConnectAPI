import express from 'express';
import {
  findUsers,
  findSingleUser,
  generateUser,
  modifyUser,
  removeUser,
  addFriend,
  deleteFriend
} from '../../controllers/user-controller.js';

const router = express.Router();

router.route('/')
  .get(findUsers)
  .post(generateUser);

router.route('/:userId')
  .get(findSingleUser)
  .put(modifyUser)
  .delete(removeUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

export default router;
