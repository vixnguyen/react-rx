import React from 'react';
import ReactDOM from 'react-dom';
import MasterStore, { useSubscriber, useEmitter } from '../../lib';
import { Home } from './Home';
import { Dialog } from './Dialog';
import LoginButton from './LoginButton';
import Logo from '../assets/react-rx.svg';
import './styles.css';


const SayHi = ({ name }) => {
  const doLogout = () => {
    useEmitter({}, 'user');
  }

  return (
    <>
      <span className="text-white m">Hi {name},</span>
      <button onClick={doLogout} className="btn btn-outline-danger">
        Sign Out
      </button>
    </>
  )
}

const Header = () => {
  const { name, isAuthenticated } = useSubscriber('user');

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="/" className="d-flex navbar-brand">
              <img src={Logo} alt="React Rx" width="32" />
              <span className="fs-4">&nbsp;React Rx</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link disabled">Demo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="https://github.com/vixnguyen/react-rx">Reposistory</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="https://medium.com/@vixnguyen">Author</a>
                </li>
              </ul>
              { isAuthenticated ? <SayHi name={name} /> : <LoginButton /> }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">&copy;&nbsp;React Rx</span>
      </div>
    </footer>
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
      <main className="flex-shrink-0">
        <div className="container mt-5">
          <Home />
          <Dialog />
        </div>
      </main>
      <Footer />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
