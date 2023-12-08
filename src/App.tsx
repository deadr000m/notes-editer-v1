import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import FilterForm from './components/FilterForm';
import Grid from './components/Grid';
import GridFilteringTags from './components/GridFilteringTags';
import { useEffect } from 'react';
import {
  saveStateToIndexedDB,
  loadStateFromIndexedDB,
} from './utils/workWithDB';
import { useAppSelector } from './hooks/hooks';
import { useAppDispatch } from './hooks/hooks';

function App() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);
  console.log('note state:' + JSON.stringify(notes));

  useEffect(() => {
    console.log('при mounting');
    loadStateFromIndexedDB(dispatch);
  }, []);
  useEffect(() => {
    console.log('при изменении состояния useEffect');
    saveStateToIndexedDB(notes);
  }, [notes]);

  return (
    <div className="App">
      <AddNote></AddNote>
      <FilterForm></FilterForm>
      <GridFilteringTags></GridFilteringTags>
      <Grid></Grid>
    </div>
  );
}

export default App;
