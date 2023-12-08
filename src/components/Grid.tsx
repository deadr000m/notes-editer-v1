import React from 'react';
import Note from './Note';
import { useAppSelector } from '../hooks/hooks';
import { selectNotes } from '../redux/slices/notesSlice';
import { selectFilter } from '../redux/slices/filterSlice';
import { INote } from '../models/INote';

function Grid() {
  let filteredNotes: INote[];
  let notes = useAppSelector(selectNotes);
  let tagsForFiltering = useAppSelector(selectFilter);
  filteredNotes = notes;

  if (tagsForFiltering.length !== 0) {
    for (let tag of tagsForFiltering) {
      filteredNotes = [
        ...filteredNotes.filter((item: INote) => item.tags.includes(tag)),
      ];
    }
  }

  return (
    <div className="grid">
      {filteredNotes.map((item, index) => (
        <Note
          note={item.note}
          tags={item.tags}
          index={index}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Grid;
