import React from 'react';

const Item = ({ data }) => {

  const additionalClassName = data.isFeatured ? 'border-primary' : '';

  return (
    <div className="feature col">
      <div className="feature-icon bg-primary bg-gradient">
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
      </div>
      <h4>{data.name}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc erat, condimentum eget ullamcorper ut, venenatis a massa. Vivamus tristique dui purus, quis imperdiet eros placerat eu.</p>
      <a href="#" className="icon-link">
        Read
        <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
      </a>
    </div>
  )
}

export { Item };
