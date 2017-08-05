import Profile from './profile';

const store = () => {
  return [
    { profile : Profile },
    { inbox : '' },
    { partners: '' },
    { search: '' },
    { settings: '' }
  ]
}

export default store;
