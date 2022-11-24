import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar1';
import { Provider } from 'react-redux';
import { store } from './component/redux/store';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <Navbar />
        
    </Provider>
    </div>
  );
}

export default App;
