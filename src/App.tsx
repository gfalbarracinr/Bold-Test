import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Sells from './components/Sells';
import { FilterType } from './types';

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Sells filter={FilterType.DAY} />
    </div>
  );
}

export default App;
