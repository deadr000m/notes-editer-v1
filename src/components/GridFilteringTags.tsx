import React from 'react';
import FilteringTag from './FilteringTag';
import { selectFilter } from '../redux/slices/filterSlice';
import { useAppSelector } from '../hooks/hooks';

function GridFilteringTags() {
  const filter = useAppSelector(selectFilter);
  return (
    <div style={{ height: '100px', padding: '15px' }}>
      <div className="grid-searched">
        {filter.map((item) => {
          return <FilteringTag tag={item} />;
        })}
      </div>
    </div>
  );
}

export default GridFilteringTags;
