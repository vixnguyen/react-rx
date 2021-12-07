import { useEmitter } from '../../../lib';

class UserService {
  async doLogin(user) {

    useEmitter({
      page: {
        isLoading: true
      }
    });

    await this.fakeAsyncRequest();

    if (user && !user.name) {
      user.name = 'RetiXer';
    }

    user.isAuthenticated = true;
    useEmitter({
      page: {
        isLoading: false
      },
      user
    });
  }

  fakeAsyncRequest(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }
}

export default UserService;

