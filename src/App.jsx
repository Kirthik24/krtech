import React from "react"
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import "./css/App.scss"

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Main from "./pages/Main";
const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Main/>
      },
    ]
  }
]);

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App
