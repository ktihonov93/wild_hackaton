import React from 'react';
import magnif from './magnif.gif'
//need to type somothing

    const LoadingSpinner = () => (
      <div className="LoadingSpinner-content">
      <div className='LoadingSpinner'>
        <img src={magnif} className='magnif' alt='loading' />
      </div>
      </div>
    );

    export default LoadingSpinner;