import React from 'react';
import MasterStore from '../../lib';
import ReactDOM from 'react-dom';
import { Root } from './Root';
import { LevelOne } from './LevelOne';
import { LevelThree } from './LevelThree';
import { Action } from './Action';
import { Home } from './Home';
import { Loader } from './Loader';
import { Dialog } from './Dialog';
import './styles.css';

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="text-dark text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg> */}
          <span className="fs-4">React Rx</span>
        </a>
      </header>
    </div>
  )
}

new MasterStore({
  page: {
    isLoading: false,
    hasError: false,
    msg: null,
    data: null
  },
  user: {
    isAuthenticated: false
  }
});

const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Dialog />
      </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
