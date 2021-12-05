# ReactRx

[Demo here](https://vixnguyen.github.io/react-rx)


This package is used for state management in React, it is not intended to become an alternative of Redux. It's just an different approach to state management.


If you're looking for the simple, flexible, effective way to manage global state of your React application, this package is for you. If you're new in Redux, you're confused with a lot of its concepts such as store, reducer, action, middleware, alright, go ahead with ReactRx.


Let's take a look the detail as below:

## Competitive benefits:
- Lightweight
- Easy to use (select state by key string)
- Simple of architecture
- Can use any where in your react application, not only in component

## Install
```
npm i react-rx
```

## Built-in
##### `MasterStore`  
- For registering a store, the same concept as `createStore` in Redux
##### `useSubscriber`  
- For watching state, the same concept as `useSelector` in React Hooks + Redux
##### `useEmitter`  
- For doing action, updating state, the same concept as `useDispatch` in React Hooks + Redux

## Usage 
### Register
```jsx
import React, { useState } from 'react';
import { MasterStore } from 'react-rx';

new MasterStore({ state });

const App = () => {

  return <></>
};

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Watch state
#### Root (Master store)
```jsx
import React from 'react';
import { useSubsriber } from 'react-rx';

const App = () => {
  const masterStore = useSubsriber();

  return <></>
};
```

#### Children
```jsx
import React from 'react';
import { useSubsriber } from 'react-rx';

const LoadingIndicator = () => {
  const isLoading = useSubsriber('page.isLoading');

  return isLoading && <Spinner />
};
```

### Update state
#### Inside component
```jsx
import React from 'react';
import { useSubsriber } from 'react-rx';

const PostReaction = (post) => {

  const { isAuthenticated } = useSubsriber('user');

  const doLike = () => {
    useEmitter({ isLiked: true });
  }

  return (
    <div>
      { 
        isAuthenticated ? <button onClick={onLike}>Like</button> : <button>Sign in</button>
      }
    </div>
  )
}
```
#### Outside component (Either Service, utils or othes)
```ts
import { useEmitter } from 'react-rx';

class PostService {
  constructor () {
    //
  }

  getPost () {
    this.api.get('posts').then((data) => {
      useEmitter({ post: data });
    }).catch((err) => {
      useEmitter({ errors: err });
    }).finally(() => {
      useEmitter({ isLoading: false });
    });
  }
}
```

## Contributing

Pull requests are always welcome!

