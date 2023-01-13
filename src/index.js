import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderCheck from './pages/OrderCheck';
import OrderChoice from './pages/OrderChoice';
import OrderComplete from './pages/OrderComplete';
import MembershipSignUp from './pages/MembershipSignUp';
import MembershipLogin from './pages/MembershipLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Menu/:takeOutId', element: <Menu /> },

      { path: 'Menu/:takeOutId/OrderCheck', element: <OrderCheck /> },
      {
        path: 'Menu/:takeOutId/OrderCheck/OrderChoice',
        element: <OrderChoice />,
      },
      {
        path: 'Menu/:takeOutId/OrderCheck/OrderComplete',
        element: <OrderComplete />,
      },
      {
        path: 'Menu/:takeOutId/OrderCheck/MembershipSignUp',
        element: <MembershipSignUp />,
      },
      {
        path: 'Menu/:takeOutId/OrderCheck/MembershipSignUp/MembershipLogin',
        element: <MembershipLogin />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
