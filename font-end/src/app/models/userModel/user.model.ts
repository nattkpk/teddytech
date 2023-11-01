import { Data } from "@angular/router";

export class User {
  constructor(
    public username: string,
    public imgProfile: string,
    public email: string,
    public password: string,
    public kid_name: string,
    public kid_age: number,
    public pointA: number,
    public pointB: number,
    public currentPoint: number,
    public activityTheme: Theme,
    public praiseTheme: Theme,
    public feelingTheme: Theme,
    public rewardTheme: Theme,
    public stickers: {
      activity: ActivitySticker[];
      praise: PraiseSticker[];
      feeling: FeelingSticker[];
      point: PointSticker[];
      reward: RewardSticker[];
    },
    public sunSticked: any[],
    public monSticked: any[],
    public tueSticked: any[],
    public wedSticked: any[],
    public thuSticked: any[],
    public friSticked: any[],
    public satSticked: any[],
    public activitySticked: any[],
    public praiseSticked: any[],
    public feelingSticked: any[],
    public rewardSticked: any[],
    public stickerHistory:infoSave[]
  ) {}
}

export class infoSave {
  constructor( 
    public startDate:string,
    public endDate:string,
    public note: string,
    public allpoint: number,
    public rewardA: reward,
    public rewardB: reward,
    public sunSticked:any[],
    public monSticked:any[],
    public tueSticked:any[],
    public wedSticked:any[],
    public thuSticked:any[],
    public friSticked:any[],
    public satSticked:any[],
    public activitySticked:any[],
    public praiseSticked:any[],
    public feelingSticked:any[],
    public rewardSticked:any[],
    ) {}
}

export class reward {
  constructor(
    public rewardName: string,
    public point: number
    ) {}
}


export class Theme {
  constructor(public font: string, public bg: string) {}
}

export class PointSticker {
  constructor(
    public icon: string,
    public bgImage: string,
    public point: number
  ) {}
}

export class RewardSticker {
  constructor(public text: string, public imageUrl: string) {}
}

export class ActivitySticker {
  constructor(public text: string, public imageUrl: string) {}
}

export class PraiseSticker {
  constructor(public text: string) {}
}

export class FeelingSticker {
  constructor(public text: string) {}
}
