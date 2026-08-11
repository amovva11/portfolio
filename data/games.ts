export interface Game {
  title: string;
  description: string;
  /** Wide animated art used on desktop. */
  image: string;
  /** Lighter still image used on narrow screens, where the gifs are wasteful. */
  mobileImage: string;
}

export const games: Game[] = [
  {
    title: "Valorant",
    description:
      "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games.",
    image:
      "https://64.media.tumblr.com/8ba7ad1ceb0b13c21a97e1644797883f/530ffdf8632abbf3-3f/s500x750/9119bdb64f35ea668304704dd5027cb6292180e7.gifv",
    mobileImage:
      "https://preview.redd.it/pfts18ct1vi61.jpg?width=4096&format=pjpg&auto=webp&s=91151c92c90e3641eb43bb6f5dba3e795ef8f397",
  },
  {
    title: "Genshin Impact",
    description: "Genshin Impact is an action role-playing game",
    image:
      "https://i.pinimg.com/originals/0d/92/28/0d9228d6eb69ab0c57d53fee1d5a4879.gif",
    mobileImage:
      "https://sensortower-itunes.s3.amazonaws.com/blog/2020/10/genshin-impact-first-week-revenue-header.jpg",
  },
  {
    title: "Forza Horizon 5",
    description:
      "Forza Horizon 5 is a racing video game developed by Playground Games.",
    image:
      "https://media4.giphy.com/media/VgvLyXeQ35gGhzmcVG/giphy-downsized-large.gif",
    mobileImage:
      "https://media4.giphy.com/media/VgvLyXeQ35gGhzmcVG/giphy-downsized-large.gif",
  },
  {
    title: "Pokemon Unite",
    description:
      "Pokémon Unite is a free-to-play, multiplayer online battle arena video game.",
    image:
      "https://64.media.tumblr.com/e5c073740257c795f8f1519178ddca3c/4df32908d32a5a41-f0/s540x810/91e1ba687932228b6138d29ef917e1cb259be7a7.gifv",
    mobileImage: "https://pbs.twimg.com/media/E6tR0L9VUAIKt9R.jpg:large",
  },
];
