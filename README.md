

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<img src="https://github.com/vixnguyen/react-rx/blob/main/example/assets/react-rx.svg" data-canonical-src="https://github.com/vixnguyen/react-rx/blob/main/example/assets/react-rx.svg" width="112" />

# React Rx

[Demo here](https://vixnguyen.github.io/react-rx)

This package is used for state management, it is not intended to become an alternative to Redux. It just provides a different approach to state management in React.


If you're looking for a simple, flexible, effective way to manage the global state of your React application, this package is for you. If you're new to Redux, you're confused with a lot of its concepts such as the `store`, `reducer`, `action`, `middleware` - Alright, go ahead with React Rx.


Let's take a look at the detail below:

## Competitive benefits:
- Light-weight
- Easy to use
- Simple of architecture
- Can use any where in your react application, not only in component

## Install
```
npm i react-rx
```

## Built-in
##### `MasterStore`  
- For registering a store, the same concept as `createStore` in `Redux`
##### `useSubscriber`  
- For watching state, the same concept as `useSelector` in `React Hooks + Redux`
##### `useEmitter`  
- For doing action, updating state, the same concept as `useDispatch` in `React Hooks + Redux`

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

#### Others
##### The usage of tring
To update a state, you can specify the path of an object
```ts
useEmitter(val, 'level1.level2.level3.level4');
```
instead of

```ts
useEmitter({ 
  level1: {
    level2: {
      level3: {
        level4: val
      }
    }
  }
});
```
Both of them works the same, choose a comfortable one base on your use-case.

##### Deep merge objects
Highly noted that, due to data integrity purpose we decided to use deep merge for updating objects, for example:

_Current state_
```ts
{
  level1: {
    level21: true,
    level22: 'xyz',
    level23: {
      level3: null
    }
  }
}
```
_Update the state with new data_

```ts
useEmitter({ 
  level1: {
    level21: false
  }
});
```

_The result would be_
```ts
{
  level1: {
    level21: false, // updated with new value
    level22: 'xyz', // not be removed
    level23: { // not be removed
      level3: null
    }
  }
}
```

It means all attributes of an object will be persisted as initial values, unless you try to force to remove them all by setting it value to empty object `{}` or `null`

_Force to remove all attributes_
```ts
useEmitter({ 
  level1: {} // or null also works
});
```

_The result would be_

```ts
{ 
  level1: {}
};
```

### Services
`React Rx` recommend you to use service to handle business logic of your application.

If you have familiared with `Redux`, you can imagine that services is the same as what `reducers` do in Redux architecture.

Please checkout the example for further detail.

## Contributing

Pull requests are always welcome!


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.facebook.com/onfocus.vi"><img src="https://avatars.githubusercontent.com/u/19356181?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vix Nguyen</b></sub></a><br /><a href="#ideas-vixnguyen" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/vixnguyen/react-rx/commits?author=vixnguyen" title="Code">💻</a> <a href="#maintenance-vixnguyen" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/st-vinguyen"><img src="https://avatars.githubusercontent.com/u/62738404?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vi Nguyen H.T.</b></sub></a><br /><a href="https://github.com/vixnguyen/react-rx/commits?author=st-vinguyen" title="Code">💻</a> <a href="#maintenance-st-vinguyen" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
