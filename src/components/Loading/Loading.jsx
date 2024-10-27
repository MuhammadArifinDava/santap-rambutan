// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Loading.scss';
import LoadingImage from '../../../public/img/Progress.png';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-overlay ${isLoading ? 'loading' : 'loading-exit'}`}>
      <div className="loader">
        <img src={LoadingImage} alt="Loading" className="progress-image" />
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Loading;
