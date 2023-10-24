export class User {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public password: string,
    public kid_name: string,
    public kid_age: string,
    public stickers: {
      activity: ActivitySticker[];
      praise: PraiseSticker[];
      feeling: FeelingSticker[];
      point: PointSticker[];
      reward: RewardSticker[]; 
    }
  ) {}
}

export class PointSticker {
  constructor(
    public icon: string,
    public bgImage: string,
    public point: string, 
    ) {}
}

export class RewardSticker {
  constructor(
    public text: string, 
    public imageUrl: string
    ) {}
}

export class ActivitySticker {
  constructor(
    public text: string, 
    public imageUrl: string
    ) {}
}

export class PraiseSticker {
  constructor(
    public text: string, 
    ) {}
}

export class FeelingSticker {
  constructor(
    public text: string, 
    ) {}
}


