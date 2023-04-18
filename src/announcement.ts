import { IFormCard, IListFilm } from './components/types';

export const mockNewCardData: IFormCard = {
  inputTitle: 'Qwerty',
  inputCost: 'string',
  date: 'string',
  inputImage: 'string',
  inputSelect: 'string',
  inputDescription: 'string',
  current: 'string',
  inputCheckbox: true,
};

export const announcement: IListFilm[] = [
  {
    id: 1,
    img: 'https://a0.muscache.com/im/pictures/miso/Hosting-51442316/original/733491f4-0e8f-4d3c-b901-e9e8ac3ee72d.jpeg?im_w=1200',
    release_date: 'release_date',
    original_title: 'original_title',
    vote_average: 10,
    overview: 'string',
    poster_path: 'string',
    original_language: 'string',
  },
];
