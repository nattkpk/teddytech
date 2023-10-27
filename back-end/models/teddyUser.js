const mongoose = require('mongoose');

const PointStickerSchema = new mongoose.Schema({
  icon: String,
  bgImage: String,
  point: String,
});

const RewardStickerSchema = new mongoose.Schema({
  text: String,
  imageUrl: String,
});

const ActivityStickerSchema = new mongoose.Schema({
  text: String,
  imageUrl: String,
});

const PraiseStickerSchema = new mongoose.Schema({
  text: String,
});

const FeelingStickerSchema = new mongoose.Schema({
  text: String,
});

const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  password: String,
  kid_name: String,
  kid_age: String,
  stickers: {
    activity: [ActivityStickerSchema],
    praise: [PraiseStickerSchema],
    feeling: [FeelingStickerSchema],
    point: [PointStickerSchema],
    reward: [RewardStickerSchema],
  },
});


module.exports =  mongoose.model('TeddyUser', UserSchema);
