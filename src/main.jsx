import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// MUI
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
