const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TeddyUser = require("../models/teddyUser.js");

router.get("/", async (req, res, next) => {
  try {
    const teddyusers = await TeddyUser.find();
    res.json(teddyusers);
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  TeddyUser.create(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id; // Get the user's ID from the URL parameter

    // Use Mongoose to find a user by ID
    const user = await TeddyUser.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
    try {
      const userId = req.params.id; // Get the user's ID from the URL parameter
      const updatedUserData = req.body; // Get the updated user data from the request body
  
      // Use Mongoose to find and update a user by ID
      const user = await TeddyUser.findOneAndUpdate(
        { _id: userId },
        updatedUserData,
        { new: true } // To return the updated user document
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
      const userId = req.params.id; // Get the user's ID from the URL parameter
  
      // Use Mongoose to find and remove a user by ID
      const user = await TeddyUser.findOneAndRemove({ _id: userId });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted' });
    } catch (err) {
      next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
      const userId = req.params.id; // Get the user's ID from the URL parameter
      const updatedUserData = req.body; // Get the updated user data from the request body
  
      // Use Mongoose to find and update specific fields of a user by ID
      const user = await TeddyUser.findOneAndUpdate(
        { _id: userId },
        { $set: updatedUserData },
        { new: true } // To return the updated user document
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      next(err);
    }
});

// Define a custom route for pushing and pulling items from arrays
router.patch('/:id/:arrayName', async (req, res, next) => {
    try {
      const userId = req.params.id; // Get the user's ID from the URL parameter
      const arrayName = req.params.arrayName; // Get the array name (e.g., 'activity', 'point', 'praise', 'feeling', 'reward')
  
      const action = req.body.action; // Action to push or pull
      const arrayItem = req.body.arrayItem; // Item to push or pull
  
      // Use Mongoose to find the user by ID
      const user = await TeddyUser.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (!user.stickers[arrayName]) {
        return res.status(404).json({ message: `Array ${arrayName} not found in user's stickers` });
      }
  
      if (action === 'push') {
        // Push the new item to the specified array
        user.stickers[arrayName].push(arrayItem);
      } else if (action === 'pull') {
        // Find the index of the item to remove by its _id and pull it from the specified array
        const itemIndex = user.stickers[arrayName].findIndex((item) => item._id.toString() === arrayItem._id);
        if (itemIndex !== -1) {
          user.stickers[arrayName].splice(itemIndex, 1);
        }
      } else {
        return res.status(400).json({ message: 'Invalid action' });
      }
  
      // Save the updated user document
      await user.save();
  
      res.json(user);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
