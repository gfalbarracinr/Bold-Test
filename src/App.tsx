import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Sells from './components/Sells';
import useFilter from './context/useFilter';

function App() {
  const {state} = useFilter();
  return (
    <div>
      <Header />
      <Summary />
      <Sells filter={state.timeFilter} />
    </div>
  );
}

export default App;
