import React, { useEffect } from 'react';
import { useSubscriber } from '../../lib';
import { Item } from './Item';
import PageService from './services/page.service';
import { Loader } from './Loader';

const LoginButton = () => {
  return ( 
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Please login to see your News Feed
    </button>
  );
}

const NewsFeed = ({name}) => {

  const { data } = useSubscriber('page');

  useEffect(() => {
    new PageService().getData();
  }, []);

  return (
    <>
      <h2 className="mb-5">Hi {name},</h2>
      <Loader />
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-start">
        {
          data && data.map((item, key) => <Item key={key} data={item} />)
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
          isAuthenticated ? <NewsFeed name={ name } /> : <LoginButton />
        }
      </div>
    </div>
  );
}

export { Home };
