import { HashRouter } from 'react-router-dom';

import './App.css';
import AppRoutes from './routes/router';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <AppRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
