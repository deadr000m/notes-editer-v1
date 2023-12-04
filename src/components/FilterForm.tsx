import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch } from '../hooks/hooks';
import { setFilter } from '../redux/slices/filterSlice';

export default function FilterForm() {
  const [searchingTag, setSerchingTag] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <div>
      TagSearch
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setFilter(searchingTag));
          setSerchingTag('');
        }}
      >
        <input
          type="text"
          placeholder="tag search"
          name="tag2"
          value={searchingTag}
          onChange={(e) => {
            setSerchingTag(e.target.value);
          }}
        ></input>
        <button type="submit">
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>
    </div>
  );
}
