import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="270" rx="4" ry="4" width="280" height="30" />
      <rect x="4" y="400" rx="5" ry="5" width="80" height="30" />
      <circle cx="140" cy="130" r="120" />
      <rect x="130" y="400" rx="15" ry="15" width="150" height="35" />
      <rect x="0" y="310" rx="4" ry="4" width="288" height="80" />
    </ContentLoader>
  );
};

export default LoadingBlock;
