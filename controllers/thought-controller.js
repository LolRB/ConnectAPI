import { Thought, User } from '../models/index.js';

const thoughtController = {
  async findThoughts(req, res) {
    try {
      const thoughts = await Thought.find().sort({ createdAt: -1 });
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching thoughts.' });
    }
  },

  async findSingleThought(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found.' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the thought.' });
    }
  },

  async addThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'Thought created but user not found.' });
      }
      res.status(201).json({ message: 'Thought created successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the thought.' });
    }
  },

  async modifyThought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found.' });
      }
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the thought.' });
    }
  },

  async removeThought(req, res) {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found.' });
      }
      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.json({ message: 'Thought deleted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the thought.' });
    }
  },

  async addReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found.' });
      }
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding the reaction.' });
    }
  },

  async deleteReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found.' });
      }
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while removing the reaction.' });
    }
  },
};

export default thoughtController;
