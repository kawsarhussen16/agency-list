import React from 'react';
import Data from "./components/data/data";
import DisplayAgencies from "./components/display-agencies";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Agency List :</h1>
      {Object.values(Data).map(agency =>
        <div key={agency}>
          <DisplayAgencies data={agency} />
        </div>
      )}
    </div>
  );
}

export default App;