import { useEmitter } from '../../../lib';

class PageService {
  constructor () {
    //
  }

  getData () {
    // dummy data
    const data = [
      {
        name: 'React RetiX',
        isLiked: false,
        isFeatured: false
      },
      {
        name: 'The new approach to React state management',
        isLiked: false,
        isFeatured: true
      },
      {
        name: 'One Redux\'s competitor',
        isLiked: false,
        isFeatured: true
      }
    ];

    // another approach to updating state
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
