import React from 'react';

export default function Card({ image, title, children }) {
  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={title || 'Card image'}
          className="card-img-top"
        />
      )}
      <div className="card-body d-flex flex-column text-center">
        {title && <h5 className="card-title">{title}</h5>}
        {children && <div className="card-text">{children}</div>}
      </div>
    </div>
  );
}
