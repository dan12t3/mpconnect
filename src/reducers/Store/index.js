import Profile from './profile';

const store = {
  'profile' : Profile ,
  'inbox' : { 'hello' : 'yolo' },
  'partners': '' ,
  'search': '' ,
  'settings': ''
}

export default (state = store ) => state;
