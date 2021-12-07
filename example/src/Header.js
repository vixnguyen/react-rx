import React from 'react';

import { useSubscriber, useEmitter } from '../../lib';

import Logo from '../assets/react-rx.svg';

const SayHi = ({ name }) => {
  const doLogout = () => {
    useEmitter({}, 'user');
  }

  return (
    <>
      <span className="text-white pr-2">Hi {name},</span>
      <button onClick={doLogout} className="btn btn-outline-danger">
        Sign Out
      </button>
    </>
  )
}

const BtnSignIn = () => {
  return (
    <>
      <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Sign In
      </button>
    </>
  );
}

const Header = () => {
  const { name, isAuthenticated } = useSubscriber('user');

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="" className="d-flex navbar-brand">
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
              { isAuthenticated ? <SayHi name={name} /> : <BtnSignIn /> }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
