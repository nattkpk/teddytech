import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User,PointSticker,RewardSticker,ActivitySticker,PraiseSticker,FeelingSticker } from './user.model';

@Injectable()
export class userStaticData {
    private users: User[] = [
        new User(
            "1",
            "user1",
            "user1@example.com",
            "password1",
            "Child1",
            "7",
            {
              activity: [
                new ActivitySticker("Take a Shower", "../../../assets/img/ActivityIcon/shower.png"),
                new ActivitySticker("Wake up on time", "../../../assets/img/ActivityIcon/clock.png"),
                new ActivitySticker("Wash hands", "../../../assets/img/ActivityIcon/wash-your-hands.png"),
                new ActivitySticker("Brush teeth", "../../../assets/img/ActivityIcon/tooth-brush.png"),
                new ActivitySticker("Make the bed", "../../../assets/img/ActivityIcon/make-the-bed.png"),
                new ActivitySticker("Drink milk", "../../../assets/img/ActivityIcon/milk-box.png"),
              ],
              praise: [
                new PraiseSticker("You're Amazing!"),
                new PraiseSticker("I'm so proud of you"),
                new PraiseSticker("You did a fantastic job!"),
                new PraiseSticker("Thank you for your help"),
                new PraiseSticker("I love you"),
                new PraiseSticker("You amaze me every day"),
              ],
              feeling: [
                new FeelingSticker("Good !"),
                new FeelingSticker("Amazing !"),
                new FeelingSticker("Bored"),
                new FeelingSticker("Happy"),
                new FeelingSticker("Sleepy"),
                new FeelingSticker("Joyful"),
              ],
              point: [
                new PointSticker("../../../assets/img/PointSticker/Icon/heart.png", "../../../assets/img/PointSticker/Bg/Bgpoint1.png", "1"),
                new PointSticker("../../../assets/img/PointSticker/Icon/star.png", "../../../assets/img/PointSticker/Bg/Bgpoint2.png", "1"),
                new PointSticker("../../../assets/img/PointSticker/Icon/shooting-star.png", "../../../assets/img/PointSticker/Bg/Bgpoint3.png", "1"),
              ],
              reward: [
                new RewardSticker("Teddy doll", "../../../assets/img/RewardIcon/teddy-bear.png"),
                new RewardSticker("New book", "../../../assets/img/RewardIcon/book.png"),
                new RewardSticker("Cotton candy", "../../../assets/img/RewardIcon/cotton-candy.png"),
                new RewardSticker("Ice cream", "../../../assets/img/RewardIcon/ice-cream1.png"),
                new RewardSticker("New Pencil", "../../../assets/img/RewardIcon/pencil-case.png"),
                new RewardSticker("New Toy", "../../../assets/img/RewardIcon/storage-box.png"),
                
              ],

              
              
              
            }
        )
    ]

    getUsers(): Observable<User[]> {
      return from([this.users]);
    }

}