import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontHero from "./Components/FrontHero";
import Login from "./Components/Login";
import Reg from "./Components/Reg";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Account from "./Components/Account";
import UpdateAccount from "./Components/UpdateAccount";
import TaskManager from "./Projects/Task_Manager/App"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontHero />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "reg",
      element: <Reg />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "account",
      element: <Account />,
    },
    {
      path: "updateaccount",
      element: <UpdateAccount />,
    },
    {
      path: "task_manager",
      element: <TaskManager />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
 

export default App
