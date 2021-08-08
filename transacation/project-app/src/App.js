import React from 'react';
import './App.css';
import {Headers} from './components1/Header';
import {Balance} from './components1/Balance';
import  {IncomeExpenses} from './components1/IncomeExpenses';
import {TransationList} from './components1/TransationList';
import { AddTransaction } from './components1/AddTransaction';
import {GlobalProvider} from './context/GlobalProvider';


function App() {
  return (
    <GlobalProvider>
    <div>
  <Headers />
  
  <div className="container">
  <Balance/>
  <IncomeExpenses/>
  <TransationList/>
  <AddTransaction/>
  </div>
    </div>
    </GlobalProvider>
  );
}

export default App;


