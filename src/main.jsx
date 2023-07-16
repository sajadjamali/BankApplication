import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./Components/ErrorPage.jsx";
import SignUp from "./Components/SignUp.jsx";
import SendCode from "./Components/SendCode.jsx";
import Services from "./Components/Services.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import EditProfile from "./Components/EditProfile.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/SignUp",
        element: <SignUp/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/Services",
        element: <Services/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/SignUp/SendCode",
        element: <SendCode/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/Services/Profile",
        element: <Profile/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/Services/Profile/EditProfile",
        element: <EditProfile/>,
        errorElement: <ErrorPage/>,
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
