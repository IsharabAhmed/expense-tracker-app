import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    
      <Header />

      <div className="container">
        
        {/* <GlobalContext.Provider > */}
          
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        
        {/* </GlobalContext.Provider> */}
     
      </div>
    
    </GlobalProvider>
    );
}

export default App;