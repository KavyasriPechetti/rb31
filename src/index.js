import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import Students from './Students';
import StudentDetails from './StudentDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'',
        element:<RegistrationForm/>
      },
      {
        path:'showall',
        element:<Students/>
      },
      {
        path:'studentDetails/:contactNum',
        element:<StudentDetails/>
      }


    ]
  },
 

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
