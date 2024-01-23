import { FiltersEnum } from "../../utils/constants";
import { HeroType, MovieType, SectionType } from "../../utils/type";
import { VIDEO_URI } from "./watch.mock";

interface Dashboard {
  heros: HeroType[];
  body: {
    sections: SectionType[];
    topViews: SectionType;
    newMovies: SectionType;
  };
}

export const trends: MovieType[] = [
  {
    id: "vid_trending_1",
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "The Seven Deadly Sins: Wrath of the Gods",
    thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          id: "vid_trending_1",
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
          episodeQuantity: 18,
          episodeTotal: 18,
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
  },
  {
    id: "vid_trending_2",
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien",
    thumbnail: "./src/assets/root/img/trending/trend-2.jpg",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
  },
  {
    id: "vid_trending_3",
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Shingeki no Kyojin Season 3 Part 2",
    thumbnail: "./src/assets/root/img/trending/trend-3.jpg",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
  },
  {
    id: "vid_trending_4",
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Fullmetal Alchemist: Brotherhood",
    thumbnail: "./src/assets/root/img/trending/trend-4.jpg",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
  },
  {
    id: "vid_trending_5",
    episodeQuantity: 18,
    episodeTotal: 18,
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    name: "Shiratorizawa Gakuen Koukou",
    thumbnail: "./src/assets/root/img/trending/trend-5.jpg",
  },
  {
    id: "vid_trending_6",
    episodeQuantity: 18,
    episodeTotal: 18,
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    name: "Code Geass: Hangyaku no Lelouch R2",
    thumbnail: "./src/assets/root/img/trending/trend-6.jpg",
  },
];

export const populars: MovieType[] = [
  {
    id: "vid_popular_1",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Sen to Chihiro no Kamikakushi",
    thumbnail: "./src/assets/root/img/popular/popular-1.jpg",
  },
  {
    id: "vid_popular_2",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Kizumonogatari III: Reiket su-hen",
    thumbnail: "./src/assets/root/img/popular/popular-2.jpg",
  },
  {
    id: "vid_popular_3",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Shirogane Tamashii hen Kouhan sen",
    thumbnail: "./src/assets/root/img/popular/popular-3.jpg",
  },
  {
    id: "vid_popular_4",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Rurouni Kenshin: Meiji Kenkaku Romantan",
    thumbnail: "./src/assets/root/img/popular/popular-4.jpg",
  },
  {
    id: "vid_popular_5",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Mushishi Zoku Shou 2nd Season",
    thumbnail: "./src/assets/root/img/popular/popular-5.jpg",
  },
  {
    id: "vid_popular_6",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Monogatari Series: Second Season",
    thumbnail: "./src/assets/root/img/popular/popular-6.jpg",
  },
];

export const recently: MovieType[] = [
  {
    id: "vid_recently_1",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Great Teacher Onizuka",
    thumbnail: "./src/assets/root/img/recent/recent-1.jpg",
  },
  {
    id: "vid_recently_2",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Fate/stay night Movie: Heaven's Feel - II. Lost",
    thumbnail: "./src/assets/root/img/recent/recent-2.jpg",
  },
  {
    id: "vid_recently_3",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Mushishi Zoku Shou: Suzu no Shizuku",
    thumbnail: "./src/assets/root/img/recent/recent-3.jpg",
  },
  {
    id: "vid_recently_4",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Fate/Zero 2nd Season",
    thumbnail: "./src/assets/root/img/recent/recent-4.jpg",
  },
  {
    id: "vid_recently_5",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "Kizumonogatari II: Nekket su-hen",
    thumbnail: "./src/assets/root/img/recent/recent-5.jpg",
  },
  {
    id: "vid_recently_6",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: 18,
    name: "The Seven Deadly Sins: Wrath of the Gods",
    thumbnail: "./src/assets/root/img/recent/recent-6.jpg",
  },
];

export const topviews: MovieType[] = [
  {
    id: "top_vid_1",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: null,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Boruto: Naruto next generations",
    thumbnail: "./src/assets/root/img/sidebar/tv-1.jpg",
    filters: ["day", "years"],
  },
  {
    id: "top_vid_2",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: null,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "The Seven Deadly Sins: Wrath of the Gods",
    thumbnail: "./src/assets/root/img/sidebar/tv-2.jpg",

    filters: [FiltersEnum.day, FiltersEnum.month],
  },
  {
    id: "top_vid_3",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: null,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Sword art online alicization war of underworld",
    thumbnail: "./src/assets/root/img/sidebar/tv-3.jpg",

    filters: [FiltersEnum.day, FiltersEnum.week],
  },
  {
    id: "top_vid_4",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: null,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Fate/stay night: Heaven's Feel I. presage flower",
    thumbnail: "./src/assets/root/img/sidebar/tv-4.jpg",

    filters: [FiltersEnum.day, FiltersEnum.years],
  },
  {
    id: "top_vid_5",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: null,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Fate stay night unlimited blade works",
    thumbnail: "./src/assets/root/img/sidebar/tv-5.jpg",

    filters: [FiltersEnum.day, FiltersEnum.week, FiltersEnum.years],
  },
];
export const newMovies: MovieType[] = [
  {
    id: "new_movie_1",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "The Seven Deadly Sins: Wrath of the Gods",
    thumbnail: "./src/assets/root/img/sidebar/comment-1.jpg",
  },
  {
    id: "new_movie_2",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Shirogane Tamashii hen Kouhan sen",
    thumbnail: "./src/assets/root/img/sidebar/comment-2.jpg",
  },
  {
    id: "new_movie_3",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Kizumonogatari III: Reiket su-hen",
    thumbnail: "./src/assets/root/img/sidebar/comment-3.jpg",
  },
  {
    id: "new_movie_4",
    episodes: [
      {
        id: "next_id_1",
        movie: {
          episodeQuantity: 18,
          episodeTotal: 18,
          id: "vid_trending_1",
          details: {
            comments: {
              quantity: 11,
            },
            views: {
              quantity: 9141,
            },
            isPublic: true,
            author: "フェイト／ステイナイト, Feito／sutei naito",
            dateAired: {
              start: "Oct 02, 2019",
              end: "?",
            },
            status: "Airing",
            genre: [
              {
                id: "cate_1",
                name: "Active",
              },
              {
                id: "cate_2",
                name: "Movie",
              },
            ],
            description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
            duration: {
              unit: "minutes",
              value: 24,
            },
            quanlity: "HD",
            rating: {
              avg: 8.5,
              votes: 161,
            },
            scores: {
              avg: 7.31,
              votes: 1515,
            },
            studio: "Lerche",
            type: "TV Series",
            uri: "#",
          },
          name: "The Seven Deadly Sins: Wrath of the Gods",
          thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
        },
        episode: 2,
        uri: VIDEO_URI,
        poster: "../root/img/sidebar/tv-1.jpg",
      },
    ],
    details: {
      comments: {
        quantity: 11,
      },
      views: {
        quantity: 9141,
      },
      isPublic: true,
      author: "フェイト／ステイナイト, Feito／sutei naito",
      dateAired: {
        start: "Oct 02, 2019",
        end: "?",
      },
      status: "Airing",
      genre: [
        {
          id: "cate_1",
          name: "Active",
        },
        {
          id: "cate_2",
          name: "Movie",
        },
      ],
      description: `Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!`,
      duration: {
        unit: "minutes",
        value: 24,
      },
      quanlity: "HD",
      rating: {
        avg: 8.5,
        votes: 161,
      },
      scores: {
        avg: 7.31,
        votes: 1515,
      },
      studio: "Lerche",
      type: "TV Series",
      uri: "#",
    },
    episodeQuantity: 18,
    episodeTotal: undefined,
    name: "Monogatari Series: Second Season",
    thumbnail: "./src/assets/root/img/sidebar/comment-4.jpg",
  },
];
export const dashboard: Dashboard = {
  heros: [
    {
      id: "hero_1",
      title: "Fate / Stay Night: Unlimited Blade Works",
      image: "./src/assets/root/img/hero/hero-1.jpg",
      genre: [
        {
          id: "category_1",
          name: "Adventure",
        },
      ],
      description: "After 30 days of travel across the world...",
    },
    {
      id: "hero_2",
      title: "Fate / Stay Night: Unlimited Blade Works",
      image: "./src/assets/root/img/hero/hero-1.jpg",
      genre: [
        {
          id: "category_1",
          name: "Adventure",
        },
      ],
      description: "After 30 days of travel across the world...",
    },
    {
      id: "hero_3",
      title: "Fate / Stay Night: Unlimited Blade Works",
      image: "./src/assets/root/img/hero/hero-1.jpg",
      genre: [
        {
          id: "category_1",
          name: "Adventure",
        },
      ],
      description: "After 30 days of travel across the world...",
    },
  ],
  body: {
    sections: [
      {
        id: "section_1",
        title: "trend now",
        movies: trends,
      },
      {
        id: "section_2",
        title: "popular shows",
        movies: populars,
      },
      {
        id: "section_3",
        title: "recently added shows",
        movies: recently,
      },
    ],
    topViews: {
      id: "sidebar_1",
      title: "top views",
      movies: topviews,
    },
    newMovies: {
      id: "sidebar_2",
      title: "new movies",
      movies: newMovies,
    },
  },
};
