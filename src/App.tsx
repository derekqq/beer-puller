import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import 'bootstrap/dist/css/bootstrap.css';
import BeerPuller from 'pages/BeerPuller';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BeerPuller />
      </Provider>
    </div>
  );
}

export default App;
