# React Rx

This package is used for React state management, it is not intended to become an alternative usage of Redux. Just provide the other option of managing global state within React app. If you're looking for the simple, flexible, effective way to manage you app state, this package is for you. You're new in React/Redux, you're facing confuses in working with alot of concepts of Redux such as reducer, action, middleware and how it works, this package is for you.
Let's take a look the detail as below:

<!-- [Demo here](https://vixnguyen.github.io/timezone-select) -->

#### There are excellent benefits competitive to others:
- Support almost popular JS libraries/frameworks such as `React`, `Angular`, `VueJS` ...
- No DateTime dependence (neither Spacetime, Moment, Date-fns nor others).
- Official Timezone Datasource from [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- Easy to update Timezone Datasource with one command.
- Timezone grouped by country and offset, however, it also provides a method to get raw data of timezone (no grouping).
- Support `Deprecated` timezones that linked to other, such as `Asia/Saigon (Vietnam)`, `Asia/Chongqing (China)`, `Europe/Belfast (England)`, `Japan (Japan)`, `Singapore (Singapore)` ...

## Install
```
npm i react-rx
```

## Built-in
### Methods
##### `MasterStore`  
- Basically, return client timezone `America/New_York`  
- If it's a deprecated timezone, return linked timezone instead, for example if client timezone is `Japan` it will return `Asia/Tokyo`.
##### `useSubscriber`  
Return raw timezone item
```js
{
  country: '',
  name: 'Singapore',
  status: 'Deprecated',
  offset: '+08:00',
  link: 'Asia/Singapore'
}
```
##### `useEmitter`  
Return grouped timezone item
```js
{
  value: 'Asia/Singapore'
  label: '(GMT+08:00) Singapore'
  country: 'SG'
  offset: '+08:00'
  included: 'Asia/Singapore, Singapore'
}
```

## Usage 
### Register
```jsx
import React, { useState } from 'react';
import { MasterStore } from 'react-rx';

new MasterStore({
  page: {
    isLoading: false,
    hasError: false,
    data: 
    msg: null
  }
});

const App = () => {

  return <></>
};

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Watch state
##### Master store (Root state)
```ts
import React from 'react';
import { useSubsriber } from 'react-rx';

const App = () => {
  const masterStore = useSubsriber();

  return <></>
};
```

##### Children
```ts
import React from 'react';
import { useSubsriber } from 'react-rx';

const LoadingIndicator = () => {
  const isLoading = useSubsriber('page.isLoading');

  return isLoading && <Spinner />
};
```

### Do an action
##### Inside component
```ts
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
##### Outside component (Either Service, utils or othes)
```ts
import { useEmitter } from 'react-rx';

class PostService {
  constructor () {
    //
  }

  fetch () {
    this.api.get('posts').then((data) => {
      useEmitter({ post: data });
    }).catch((err) => {
      useEmitter({ errors: err });
    }).finally(() => {
      useEmitter({ page: {
        isLoading: false
      } });
    });
  }
}
```

## Contributing

Pull requests are always welcome!

