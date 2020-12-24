import React from 'react';
import './App.scss';
import PlantList from './plant-list/PlantList';
import SideNav from './side-nav/SideNav';
import TopNav from './top-nav/TopNav';

function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      <SideNav />
      <PlantList />
    </div>
  );
}

export default App;
