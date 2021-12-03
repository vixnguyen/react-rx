import { useEmitter } from '../../../lib';

class PageService {
  constructor () {
    //
  }

  getData () {
    // dummy data
    const data = [
      {
        name: 'Redux Hooks',
        isLiked: false,
        isFeatured: false
      },
      {
        name: 'React Rx',
        isLiked: false,
        isFeatured: true
      },
      // {
      //   name: 'Recoil',
      //   isLiked: false,
      //   isFeatured: false
      // }
    ];

    // set loading
    useEmitter({
      page: {
        isLoading: true
      }
    });

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
