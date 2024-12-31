import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicComponent from './components/PublicPage';
import ProtectedPage from './components/ProtectedPage';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicComponent />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
