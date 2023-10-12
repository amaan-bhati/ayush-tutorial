import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';


const App = () => {
 

  return (
    <>
    
  
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4}>
        <List
          isLoading={isLoading}
          childClicked={childClicked}
          places={filteredPlaces.length ? filteredPlaces : places}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </Grid>
     
    </Grid>
    </>
  );
};

export default App;