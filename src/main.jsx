import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import App from './App';


const frontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing publishableKey in .env.local');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider frontendApi={frontendApi} publishableKey={publishableKey}>
    <App />
  </ClerkProvider>
);
