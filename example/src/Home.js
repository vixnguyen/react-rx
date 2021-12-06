import React, { useEffect } from 'react';
import { useSubscriber, useEmitter } from '../../lib';
import { Item } from './Item';
import PageService from './services/page.service';
import { Loader } from './Loader';

const NoContent = () => {
  return (
    <>
      <h2>Please sign in</h2>
    </>
  );
}

const NewsFeed = ({ name }) => {
  const data = useSubscriber('page.data');

  useEffect(() => {
    if (!data) {
      new PageService().getData();
    }
  }, [data]);

  return (
    <>
      {/* <h2 className="mb-5">News Feed</h2> */}
      <Loader />
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-start">
        {
          data && data.length && data.map((item, key) => <Item key={key} data={item} />)
        }
      </div>
    </>
  )
}

const Home = () => {
  const { name, isAuthenticated } = useSubscriber('user');

  return (
    <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
      <div className="col">
        {
          isAuthenticated ? <NewsFeed name={ name } /> : <NoContent />
        }
      </div>
    </div>
  );
}

export { Home };
