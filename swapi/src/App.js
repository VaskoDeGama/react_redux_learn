import React from 'react';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from "./components/header";
import ItemList from "./components/item-list";
import RandomPlanet from "./components/random-planet";
import PersonDetails from "./components/person-details";


function App() {
  return (
    <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList />
            </div>
            <div className="col-md-6">
                <PersonDetails />
            </div>
        </div>
    </div>
  );
}

export default App;
