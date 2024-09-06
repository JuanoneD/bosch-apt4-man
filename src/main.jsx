
import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Graph1 } from './Graph.jsx';
import { RickMorty } from './RIckAndMorty.jsx';
import {Maps} from './Maps.jsx'
import { Products } from './Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/Graph", 
    element: <Graph1/>,
  },
  {
    path:"/API",
    element: <RickMorty/>
  },
  {
    path:"/Map",
    element: <Maps/>
  },
  {
    path:'/Products',
    element: <Products/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
