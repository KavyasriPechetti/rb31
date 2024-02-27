import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Outlet></Outlet>
        
      </div>
    </Provider>

  );
}

export default App;
