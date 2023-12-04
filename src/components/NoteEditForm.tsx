import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Select from 'react-select';
import { useAppDispatch } from '../hooks/hooks';
import { addNote } from '../redux/slices/notesSlice';
interface INoteEditForm {
  toggleEditMore: () => void;
}
function NoteEditForm({ toggleEditMore }: INoteEditForm) {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<any>([]);
  const dispatch = useAppDispatch();
  const options = [
    { value: 'work', label: 'work' },
    { value: 'shop', label: 'shop' },
    { value: 'travel', label: 'travel' },
    { value: 'sport', label: 'sport' },
    { value: 'study', label: 'study' },
    { value: 'hobby', label: 'hobby' },
  ];

  const onChangeSelect = (newValue: any) => {
    setSelectValue(newValue.map((item: any) => item.value));
    // let arr: string[] = [];
    // arr.push(newValue.value);
    // console.log(newValue.value);
    // setSelectValue([...arr]);
  };
  const getValue = () => {
    if (selectValue) {
      return options.filter((item) => selectValue.indexOf(item.value) >= 0);
    } else {
      return [];
    }
  };
  return (
    <div className="note-edit">
      <AiOutlineCloseCircle
        className="close-form"
        onClick={() => {
          toggleEditMore();
          setSelectValue([]);
          setTextareaValue('');
        }}
      ></AiOutlineCloseCircle>
      <div className="note-edit-body">
        <textarea
          placeholder="Type note"
          onInput={() => {}}
          value={textareaValue}
          onChange={(e) => {
            setTextareaValue(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <Select
          onChange={onChangeSelect}
          value={getValue()}
          options={options}
          isMulti
          className="tag-edit"
        />
      </div>
      <button
        onClick={() => {
          dispatch(addNote({ note: textareaValue, tags: selectValue }));
          setTextareaValue('');
          setSelectValue([]);
        }}
      >
        Add Note
      </button>
    </div>
  );
}

export default NoteEditForm;
