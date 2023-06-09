import { HashRouter } from 'react-router-dom';

import AppRoutes from './routes/router';
import './App.css';

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
