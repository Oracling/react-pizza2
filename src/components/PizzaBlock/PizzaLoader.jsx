import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="313" rx="10" ry="10" width="280" height="88" />
    <rect x="140" y="420" rx="20" ry="20" width="140" height="45" />
    <rect x="0" y="430" rx="15" ry="15" width="100" height="30" />
  </ContentLoader>
);

export default PizzaLoader;
