import React from 'react';
import ReactDOM from 'react-dom';
import MasterStore from '../../lib';
import { Home } from './Home';
import { Dialog } from './Dialog';
import Logo from '../assets/react-rx.svg';
import './styles.css';


const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex text-dark text-decoration-none">
          <img src={Logo} alt="React Rx" width="32" />
          <span className="fs-4">&nbsp;ReactRx</span>
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
