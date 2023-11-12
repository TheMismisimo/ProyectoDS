import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Somos from './Paginas/somos';
import Galeria from './Paginas/Galeria';
import Nosotros from './Paginas/Nosotros';
import Contactos from './Paginas/Contactos';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "somos",
    element: <Somos/>,
  },
  {
    path: "nosotros",
    element: <Nosotros/>,
  },
  {
    path: "galeria",
    element: <Galeria/>,
  },
  {
    path: "contactos",
    element: <Contactos/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

