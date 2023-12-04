import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface AddNoteProps {
  setEditMode: (arg: boolean) => void;
}
export default function AddNote({ setEditMode }: AddNoteProps) {
  return (
    <div
      className="new-note"
      onClick={() => {
        setEditMode(true);
      }}
    >
      <div className="new-note-inp">
        NewNote
        <AiOutlinePlus></AiOutlinePlus>
      </div>
    </div>
  );
}
