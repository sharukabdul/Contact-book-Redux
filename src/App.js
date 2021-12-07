import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './components/Home';
import reducer from './reducers/reducer';

const initialState = {
  userDetails: []
}

const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

  return (
    <div className="App">
      <Provider store= {store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
