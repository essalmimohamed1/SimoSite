import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// App.js or index.js
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Optional: specific weight
import "@fontsource/montserrat";
import "@fontsource/raleway";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
