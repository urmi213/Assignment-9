import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { NavigationProvider } from './context/NavigationContext';
import router from './routes/Router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </AuthProvider>
  </React.StrictMode>
);
