import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import Galery from './components/Galery/Galery';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path :"/",
    element : <Header/>,
    children : [
      {
        path: "/accueil",
        element: <Home/> 
      },
      {
        path: "/galerie",
        element: <Galery/> 
      },
      {
        path: "/tarifs",
        element: <Tarifs/> 
      },
      {
        path: "/contact",
        element: <Contact/> 
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
		<RouterProvider router={router}/>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
