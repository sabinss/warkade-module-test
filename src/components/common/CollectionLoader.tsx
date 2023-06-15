import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CollectionLoader = () => {
  return (
    <div style={{ height: '90%', width: '90%' }}>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton height={190} width={180} />
      </SkeletonTheme>
    </div>
  );
};
