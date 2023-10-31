const mongoose = require('mongoose');
const { stringify } = require('querystring');

const PointStickerSchema = new mongoose.Schema({
  icon: String,
  bgImage: String,
  point: Number,
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

const reward = new mongoose.Schema({
  rewardName: String,
  point: Number
});

const infoSave = new mongoose.Schema({
  week: String,
  note: String,
  allpoint: Number,
  rewardA: reward,
  rewardB: reward,
  sunSticked:[mongoose.Schema.Types.Mixed],
  monSticked:[mongoose.Schema.Types.Mixed],
  tueSticked:[mongoose.Schema.Types.Mixed],
  wedSticked:[mongoose.Schema.Types.Mixed],
  thuSticked:[mongoose.Schema.Types.Mixed],
  friSticked:[mongoose.Schema.Types.Mixed],
  satSticked:[mongoose.Schema.Types.Mixed],
  activitySticked:[mongoose.Schema.Types.Mixed],
  praiseSticked:[mongoose.Schema.Types.Mixed],
  feelingSticked:[mongoose.Schema.Types.Mixed],
  rewardSticked:[mongoose.Schema.Types.Mixed],
});

const UserSchema = new mongoose.Schema({
  username: String,
  imgProfile: String,
  email: String,
  password: String,
  kid_name: String,
  kid_age: Number,
  pointA: Number,
  pointB: Number,
  currentPoint: Number,
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
  sunSticked:[mongoose.Schema.Types.Mixed],
  monSticked:[mongoose.Schema.Types.Mixed],
  tueSticked:[mongoose.Schema.Types.Mixed],
  wedSticked:[mongoose.Schema.Types.Mixed],
  thuSticked:[mongoose.Schema.Types.Mixed],
  friSticked:[mongoose.Schema.Types.Mixed],
  satSticked:[mongoose.Schema.Types.Mixed],
  activitySticked:[mongoose.Schema.Types.Mixed],
  praiseSticked:[mongoose.Schema.Types.Mixed],
  feelingSticked:[mongoose.Schema.Types.Mixed],
  rewardSticked:[mongoose.Schema.Types.Mixed],
  saveSticker:[{infoSave}]
    
  
});


module.exports =  mongoose.model('TeddyUser', UserSchema);


