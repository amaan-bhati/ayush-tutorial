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
      <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Map
          setChildClicked={setChildClicked}
          setBounds={setBounds}
          setCoords={setCoords}
          coords={coords}
          places={filteredPlaces.length ? filteredPlaces : places}
          weatherData={weatherData}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default App;