import React from 'react';
import MasterStore from '../../lib';
import ReactDOM from 'react-dom';
import { Root } from './Root';
import { LevelOne } from './LevelOne';
import { LevelThree } from './LevelThree';
import { Action } from './Action';
import { Home } from './Home';
import { Loader } from './Loader';
import './styles.css';

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg> */}
          <span className="fs-4">React Rx</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
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
    isAuthenticated: true
  }
});

const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        {/* <div className="row g-4 row-cols-1 row-cols-lg-3">
          <Root />
          <LevelOne />
          <LevelThree />
        </div> */}
        <Loader />
        <Home />
      </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
