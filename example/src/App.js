import React from 'react';
import ReactDOM from 'react-dom';

import MasterStore from '../../lib';

import Home from './Home';
import Dialog from './Dialog';
import Header from './Header';
import Footer from './Footer';

import './styles.css';


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
        </div>
      </main>
      <Dialog />
      <Footer />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
