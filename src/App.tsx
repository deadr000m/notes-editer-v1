import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import FilterForm from './components/FilterForm';
import Grid from './components/Grid';
import GridFilteringTags from './components/GridFilteringTags';
import { useEffect } from 'react';

import { useAppSelector } from './hooks/hooks';
import { useAppDispatch } from './hooks/hooks';

function App() {
  const fullState = useAppSelector((state) => state);
  console.log('note state:' + JSON.stringify(fullState));

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
