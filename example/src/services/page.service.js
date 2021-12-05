import { useEmitter } from '../../../lib';

class PageService {
  constructor () {
    //
  }

  getData () {
    // dummy data
    const data = [
      {
        name: 'React Rx',
        isLiked: false,
        isFeatured: false
      },
      {
        name: 'The new React state management since 2021',
        isLiked: false,
        isFeatured: true
      },
      {
        name: 'One Redux\'s competitor',
        isLiked: false,
        isFeatured: true
      }
    ];

    // another approach to state updating
    useEmitter(true, 'page.isLoading');

    setTimeout(() => {
      useEmitter({
        page: {
          isLoading: false,
          data
        },
      });
    }, 1000);
  }
}

export default PageService;
