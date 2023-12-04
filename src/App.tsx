import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import FilterForm from './components/FilterForm';
import Grid from './components/Grid';
import GridSearchedTag from './components/GridSearchedTag';
import ModelWindow from './components/ModelWindow';
import NoteEditForm from './components/NoteEditForm';
import { useState } from 'react';

function App() {
  let [editMode, setEditMode] = useState<boolean>(false);
  const toggleEditMore = (): void => {
    setEditMode(!editMode);
  };
  return (
    <div className="App">
      <ModelWindow editMode={editMode} toggleEditMore={toggleEditMore}>
        <NoteEditForm toggleEditMore={toggleEditMore} />
      </ModelWindow>
      <AddNote setEditMode={setEditMode}></AddNote>
      <FilterForm></FilterForm>
    </div>
  );
}

export default App;
