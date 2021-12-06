import React from 'react';
import Logo from '../assets/react-rx-white.svg';

const Item = ({ data }) => {
  return (
    <div className="feature col">
      <div className="feature-icon bg-info bg-gradient">
        <img src={Logo} alt="React Rx" className="bi" width="32" />
      </div>
      <h5>{data.name}</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc erat, condimentum eget ullamcorper ut, venenatis a massa. Vivamus tristique dui purus, quis imperdiet eros placerat eu.</p>
      <a href="https://github.com/vixnguyen/react-rx" target="_blank" className="icon-link text-info">
        Read &raquo;
      </a>
    </div>
  )
}

export default Item;
