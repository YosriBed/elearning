import React from 'react';
import ContentLoader from 'react-content-loader';

const index = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 800 400"
    backgroundColor="#111827"
    foregroundColor="#6366F1"
  >
    <rect x="50" y="20" rx="0" ry="0" width="500" height="170" />
  </ContentLoader>
);

export default index;
