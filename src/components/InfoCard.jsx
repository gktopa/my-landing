import React from 'react';

export default function InfoCard({ title, image, description, bgColor = '#fff' }) {
  return (
    <div className="card-custom card-body" >
      <div className="card-title-custom d-flex align-items-center justify-content-between" style={{ backgroundColor: bgColor }}>
        <h6>{title}</h6>
        {image && <img src={image} alt="icon" />}
      </div>
      <div className="card-descr text-start">
        <p>{description}</p>
      </div>
    </div>
  );
}
