import { useReducer } from 'react';
import { StateProvider } from './context/index';
import Cat from './components/Cat';
import './App.css';

function App() {
  const defaultState = {
    activity: 'napping',
  }

  const contextReducer = (state, action) => {
    switch (action.type) {
      case 'ACTION_EAT':
        return {
          activity: 'eating'
        }
      case 'ACTION_NAP':
        return {
          activity: 'napping'
        }
      default:
        return state
    }
  };



  return (
    <div className="App">
      <StateProvider value={useReducer(contextReducer, defaultState)}>
      <h1>Cat + Context </h1>
      <Cat />
      </StateProvider>
    </div>
  );
}

export default App;
