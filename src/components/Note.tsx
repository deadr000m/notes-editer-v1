import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useAppDispatch } from '../hooks/hooks';
import { deleteNote } from '../redux/slices/notesSlice';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { editNote } from '../redux/slices/notesSlice';
// import './Note.css';
import { deleteSpanTags } from '../utils/deleteSpanTags';

let someVar: string;
let someArr: string[];

interface NoteProps {
  note: string;
  tags: string[];
  id: string;
  index: number;
  key: string;
}
function Note({ note, tags, id, index }: NoteProps) {
  const dispatch = useAppDispatch();
  let [content, setContent] = useState<string>(note);
  const [currentTags, setCurrentTags] = useState<string[]>(tags);

  const handleOnChange = (e: ContentEditableEvent) => {
    let str = e.target.value;
    if (str.includes('#')) {
      //если есть хэштеги
      console.log('otrabotal');
      if (str.includes('span')) {
        //ессли есть span
        let arr: string[] = str.split(/<span\b[^>]*>(.*?)<\/span>/g);
        str = arr.join('');
      }
      const regex = /(#\w+)/g;
      let result = str.replace(regex, '<span id="hihhlighting">$1</span>');
      console.log(result);

      setContent(result);
      someVar = result;
      let tagArray = str?.match(/(#\w+)/g);
      if (tagArray !== null) {
        setCurrentTags(tagArray);
        someArr = [...tagArray];
      }
    } else {
      setContent(str);
      someVar = str;
    }
  };

  return (
    <div className="note">
      <div>
        <MdDeleteForever
          className="button-icon"
          onClick={() => {
            dispatch(deleteNote(id));
          }}
        ></MdDeleteForever>
      </div>
      <div style={{ minHeight: '30px' }}>
        <p className="note-head">{currentTags.join('')}</p>
      </div>

      <ContentEditable
        html={content}
        onChange={handleOnChange}
        tagName="div"
        className="editable-div"
        onBlur={(e) => {
          dispatch(editNote({ id: id, note: someVar, tags: someArr }));
        }}
      />
    </div>
  );
}

export default Note;
