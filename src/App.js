import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';

function App() {
  const isAuthenticated = true; // Измените это значение в соответствии с вашими требованиями
  const routes = useRoutes(isAuthenticated);
    return (
      <Router>
        <div className="container">
          { routes }
        </div>
      </Router>
    );
}

export default App;