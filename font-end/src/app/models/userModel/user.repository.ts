import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UserDataService } from 'src/app/services/user-data.service';
import { ApiData } from 'src/app/services/apidata.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private apiData: ApiData
  ) {
    this.apiData.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  //get all users
  getAllUsers(): User[] {
    return this.users;
  }

  //get by ID
  getUserById(id: string): Observable<User | null> {
    return this.apiData.getUserById(id).pipe(
      map((user) => {
        if (user) {
          this.userDataService.setUserId(id);
          return user;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'User Not Found',
          });
          return null;
        }
      })
    );
  }

  pushOrPullStickers(
    userId: string,
    arrayName: string,
    action: string,
    arrayItem: any
  ): void {
    this.apiData.updateStickers(userId, arrayName, action, arrayItem).subscribe(
      (response) => {
        console.log('Updated user data:', response);
      },
      (error) => {
        console.error('Error updating stickers:', error);
      }
    );
  }

  updateUserFields(userId: string, updatedUserData: any) {
    this.apiData.updateUserFields(userId, updatedUserData).subscribe(
      (updatedUser) => {
        console.log('User data updated:', updatedUser);
      },
      (error) => {
        console.error('Error updating user data:', error);
      }
    );
  }

  loginUser(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.userDataService.setUserId(user._id);
      return true;
    } else {
      return false;
    }
  }

  registerUser(
    username: string,
    email: string,
    password: string,
    checkPassword: string,
    kid_name: string,
    kid_age: number
  ) {
    if (!username || !email || !password || !checkPassword) {
      return false;
    }
    const userExists = this.users.find((u) => u.username === username);
    if (userExists || password !== checkPassword) {
      return false;
    }

    const newUser = {
      
        
          username: username,
          imgProfile: "ducky.jpg",
          email: email,
          password: password,
          kid_name: kid_name,
          kid_age: kid_age,
          pointA: 0,
          pointB: 0,
          currentPoint: 0,
          activityTheme: {
            font: "#3F5236",
            bg: "../../../assets/img/BgSticker/Diamon4.png"
          },
          praiseTheme: {
            font: "#dd689d",
            bg: "../../../assets/img/BgSticker/Heart8.png"
          },
          feelingTheme: {
            font: "#947218",
            bg: "../../../assets/img/BgSticker/Star5.png"
          },
          rewardTheme: {
            font: "#225E92",
            bg: "../../../assets/img/BgSticker/wow2.png"
          },
          stickers: {
            activity: [
              {
                text: "Take a Shower",
                imageUrl: "../../../assets/img/ActivityIcon/shower.png",
                _id: "653d24ca484c7810cf1aa49e"
              },
              {
                text: "Wake up on time",
                imageUrl: "../../../assets/img/ActivityIcon/clock.png",
                _id: "653d24ca484c7810cf1aa49f"
              },
              {
                text: "Wash hands",
                imageUrl: "../../../assets/img/ActivityIcon/wash-your-hands.png",
                _id: "653d24ca484c7810cf1aa4a0"
              },
              {
                text: "Brush teeth",
                imageUrl: "../../../assets/img/ActivityIcon/tooth-brush.png",
                _id: "653d24ca484c7810cf1aa4a1"
              },
              {
                text: "Make the bed",
                imageUrl: "../../../assets/img/ActivityIcon/make-the-bed.png",
                _id: "653d24ca484c7810cf1aa4a2"
              },
              {
                text: "Drink milk",
                imageUrl: "../../../assets/img/ActivityIcon/milk-box.png",
                _id: "653d24ca484c7810cf1aa4a3"
              },
              {
                text: "get bed on time",
                imageUrl: "../../../assets/img/ActivityIcon/sleeping.png",
                _id: "653d2d47484c7810cf1ab16f"
              }
            ],
            praise: [
              {
                text: "You're Amazing!",
                _id: "653d24ca484c7810cf1aa4a4"
              },
              {
                text: "I'm so proud of you",
                _id: "653d24ca484c7810cf1aa4a5"
              },
              {
                text: "You did a fantastic job!",
                _id: "653d24ca484c7810cf1aa4a6"
              },
              {
                text: "Thank you for your help",
                _id: "653d24ca484c7810cf1aa4a7"
              },
              {
                text: "I love you",
                _id: "653d24ca484c7810cf1aa4a8"
              },
              {
                text: "You amaze me every day",
                _id: "653d24ca484c7810cf1aa4a9"
              }
            ],
            feeling: [
              {
                text: "Good !",
                _id: "653d24ca484c7810cf1aa4aa"
              },
              {
                text: "Amazing !",
                _id: "653d24ca484c7810cf1aa4ab"
              },
              {
                text: "Bored",
                _id: "653d24ca484c7810cf1aa4ac"
              },
              {
                text: "Happy",
                _id: "653d24ca484c7810cf1aa4ad"
              },
              {
                text: "Sleepy",
                _id: "653d24ca484c7810cf1aa4ae"
              },
              {
                text: "Joyful",
                _id: "653d24ca484c7810cf1aa4af"
              }
            ],
            point: [
              {
                icon: "../../../assets/img/PointSticker/Icon/heart.png",
                bgImage: "../../../assets/img/PointSticker/Bg/Bgpoint1.png",
                point: "1",
                _id: "653d24ca484c7810cf1aa4b0"
              },
              {
                icon: "../../../assets/img/PointSticker/Icon/star.png",
                bgImage: "../../../assets/img/PointSticker/Bg/Bgpoint2.png",
                point: "2",
                _id: "653d24ca484c7810cf1aa4b1"
              },
              {
                icon: "../../../assets/img/PointSticker/Icon/shooting-star.png",
                bgImage: "../../../assets/img/PointSticker/Bg/Bgpoint3.png",
                point: "3",
                _id: "653d24ca484c7810cf1aa4b2"
              }
            ],
            reward: [
              {
                text: "Teddy doll",
                imageUrl: "../../../assets/img/RewardIcon/teddy-bear.png",
                _id: "653d24ca484c7810cf1aa4b3"
              },
              {
                text: "New book",
                imageUrl: "../../../assets/img/RewardIcon/book.png",
                _id: "653d24ca484c7810cf1aa4b4"
              },
              {
                text: "Cotton candy",
                imageUrl: "../../../assets/img/RewardIcon/cotton-candy.png",
                _id: "653d24ca484c7810cf1aa4b5"
              },
              {
                text: "Ice cream",
                imageUrl: "../../../assets/img/RewardIcon/ice-cream1.png",
                _id: "653d24ca484c7810cf1aa4b6"
              },
              {
                text: "New Pencil",
                imageUrl: "../../../assets/img/RewardIcon/pencil-case.png",
                _id: "653d24ca484c7810cf1aa4b7"
              },
              {
                text: "New Toy",
                imageUrl: "../../../assets/img/RewardIcon/storage-box.png",
                _id: "653d24ca484c7810cf1aa4b8"
              }
            ]
          },
          sunSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          monSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          tueSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          wedSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          thuSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          friSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          satSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          activitySticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          praiseSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          feelingSticked: [
            {
              text: ""
            },
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          rewardSticked: [
            {
              text: ""
            },
            {
              text: ""
            }
          ],
          stickerHistory: []
        }
      
    

    console.log('New User Details:', newUser);

    this.apiData.registerUser(newUser).subscribe(
      (response) => {
        console.log('User registered:', response);
        this.loginUser
      },
      (error) => {
        console.error('User registration failed:', error);
      }
    );

    return true;
  }

  updateUser(id: string, updated: User, password: string) {
    const user = this.users.find((u) => u.password !== password);
    if (updated) {
      this.apiData.updateUserFields(user._id, updated).subscribe(
        (response) => {
          console.log('User updated:', response);
        },
        (error) => {
          console.error('User update failed:', error);
        }
      );
    } else {
      console.log('User update failed');
    }
  }

  // deleteUser(id: string): boolean {
  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //     return true;
  //   }
  //   return false;
  // }

  // addUser(user: User): void {
  //     this.users.push(user);
  //     }
}
