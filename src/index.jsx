import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { MainPage } from './components/MainPage';

createRoot(document.querySelector('#app')).render(<MainPage />);
