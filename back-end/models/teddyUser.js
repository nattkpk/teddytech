const mongoose = require('mongoose');
const { stringify } = require('querystring');

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

const Theme = new mongoose.Schema({
  font: String,
  bg: String
});

const FeelingStickerSchema = new mongoose.Schema({
  text: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  imgProfile: String,
  email: String,
  password: String,
  kid_name: String,
  kid_age: String,
  activityTheme: Theme,
  praiseTheme: Theme,
  feelingTheme: Theme,
  rewardTheme: Theme,
  stickers: {
    activity: [ActivityStickerSchema],
    praise: [PraiseStickerSchema],
    feeling: [FeelingStickerSchema],
    point: [PointStickerSchema],
    reward: [RewardStickerSchema],
  },
  
});


module.exports =  mongoose.model('TeddyUser', UserSchema);
