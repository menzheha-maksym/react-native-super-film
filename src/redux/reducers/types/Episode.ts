export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  // rating
  //image
  show: {
    name: string;
    image: {
      medium: string;
      original: string;
    };
    premiered: string;
  };
};
