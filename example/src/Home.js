import React, { useEffect } from 'react';
import { useSubscriber } from '../../lib';
import { Item } from './Item';
import PageService from './services/page.service';

const Home = () => {

  const { data } = useSubscriber('page');
  
  useEffect(() => {
    new PageService().getData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
      {
        data && data.map((item, key) => <Item key={key} data={item} />)
      }
    </div>
  )
}

export { Home };
