import React, { useEffect } from 'react';

import { useSubscriber } from '../../lib';

import PageService from './services/page.service';
import Item from './Item';
import Loader from './Loader';

const NoContent = () => {
  return (
    <h5>Hi Guest! Please <span className="text-link" data-bs-toggle="modal" data-bs-target="#exampleModal">sign in</span> to continue.</h5>
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
      {/* <h2 className="mb-5">Hi {name}</h2> */}
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

export default Home;
