import { VIDEO_URI } from ".";
import { DetailsPageType } from "../../utils/type";
import { newMovies } from "./home.mock";

export const details: DetailsPageType = {
  id: "vid_trending_1",
  episodes: [
    {
      id: "next_id_1",
      movie: {
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
        episodeQuantity: 18,
        episodeTotal: 18,
        name: "The Seven Deadly Sins: Wrath of the Gods",
        thumbnail: "./src/assets/root/img/sidebar/comment-1.jpg",
      },
      episode: 2,
      uri: VIDEO_URI,
      poster: "./src/assets/root/img/sidebar/comment-1.jpg",
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
      avg: 4.5,
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
  thumbnail: "./src/assets/root/img/trending/trend-1.jpg",
  comments: [
    {
      id: "cmt_1",
      movieId: "movie_1",
      user: {
        _id: "user_1",
        email: "m.contacqc@gmai.com",
        fullname: "Lewis Mann",
        isAdmin: false,
        username: "lewismain",
        avatar: "./src/assets/root/img/anime/review-1.jpg",
      },
      content: `whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL`,
      createdAt: Date.now(),
    },
  ],
  sidebar: {
    id: "sidebar_1",
    title: "you might like...",
    movies: newMovies,
  },
};
