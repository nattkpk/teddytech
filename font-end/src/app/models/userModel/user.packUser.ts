import { Injectable } from "@angular/core";

@Injectable()
export class PackUser {
packUsers = [{ 
  //----------------------- 3-6 Years ----------------------
    username: "PreSchool",
    imgProfile: "../../../assets/profile/Profile1.png",
    email: "index0@gmail.com",
    password: "1234",
    kid_name: "TinyJunior",
    kid_age: 3,
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
          text: "Get Dress",
          imageUrl: "../../../assets/img/ActivityIcon/get-dressed.png",
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
          text: "Drink milk",
          imageUrl: "../../../assets/img/ActivityIcon/milk-box.png",
          _id: "653d24ca484c7810cf1aa4a3"
        },
        {
          text: "go potty",
          imageUrl: "../../../assets/img/ActivityIcon/toilet.png",
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
          text: "I love you",
          _id: "653d24ca484c7810cf1aa4a8"
        },
        {
          text: "You amaze me every day",
          _id: "653d24ca484c7810cf1aa4a9"
        },
        {
          text: "Doing great! Keep it up!",
          _id: "653d24ca484c7810cf1aa4a7"
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
          text: "New Toy",
          imageUrl: "../../../assets/img/RewardIcon/storage-box.png",
          _id: "653d24ca484c7810cf1aa4b8"
        },
        {
          text: "Storybook",
          imageUrl: "../../../assets/img/RewardIcon/book.png",
          _id: "653d24ca484c7810cf1aa4b4"
        },
        {
          text: "coloring set",
          imageUrl: "../../../assets/img/RewardIcon/colored-pencils.png",
          _id: "653d24ca484c7810cf1aa4b5"
        },
        {
          text: "Ice cream",
          imageUrl: "../../../assets/img/RewardIcon/ice-cream.png",
          _id: "653d24ca484c7810cf1aa4b6"
        },
        {
          text: "Candy",
          imageUrl: "../../../assets/img/RewardIcon/sweets.png",
          _id: "653d24ca484c7810cf1aa4b7"
        },
        
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
  },


  //------------------------------------------ 7-9 Years --------------------------------------------------------
  { 
    username: "PimarySchool",
    imgProfile: "../../../assets/profile/Profile3.png",
    email: "index1@gmail.com",
    password: "1234",
    kid_name: "Junior",
    kid_age: 7,
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
          text: "Complete Homework",
          imageUrl: "../../../assets/img/ActivityIcon/homework.png",
          _id: "653d24ca484c7810cf1aa49e"
        },
        {
          text: "Wake up on time",
          imageUrl: "../../../assets/img/ActivityIcon/clock.png",
          _id: "653d24ca484c7810cf1aa49f"
        },
        {
          text: "Make the bed",
          imageUrl: "../../../assets/img/ActivityIcon/make-the-bed.png",
          _id: "653d24ca484c7810cf1aa4a0"
        },
        {
          text: "Sweep the floor",
          imageUrl: "../../../assets/img/ActivityIcon/housekeeping.png",
          _id: "653d24ca484c7810cf1aa4a1"
        },
        {
          text: "Eat healthy food",
          imageUrl: "../../../assets/img/ActivityIcon/vegetables.png",
          _id: "653d24ca484c7810cf1aa4a3"
        },
        {
          text: "read a book",
          imageUrl: "../../../assets/img/ActivityIcon/clock2.png",
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
          text: "I love you",
          _id: "653d24ca484c7810cf1aa4a8"
        },
        {
          text: "You amaze me every day",
          _id: "653d24ca484c7810cf1aa4a9"
        },
        {
          text: "Thank you for your help",
          _id: "653d24ca484c7810cf1aa4a7"
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
          text: "New Toy",
          imageUrl: "../../../assets/img/RewardIcon/storage-box.png",
          _id: "653d24ca484c7810cf1aa4b8"
        },
        {
          text: "Book",
          imageUrl: "../../../assets/img/RewardIcon/books.png",
          _id: "653d24ca484c7810cf1aa4b4"
        },
        {
          text: "Piggy Bank",
          imageUrl: "../../../assets/img/RewardIcon/piggy-bank.png",
          _id: "653d24ca484c7810cf1aa4b5"
        },
        {
          text: "cupcake",
          imageUrl: "../../../assets/img/RewardIcon/cupcake.png",
          _id: "653d24ca484c7810cf1aa4b6"
        },
        {
          text: "Sticker",
          imageUrl: "../../../assets/img/RewardIcon/stickers.png",
          _id: "653d24ca484c7810cf1aa4b7"
        },
        
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
]
      
        
    
}