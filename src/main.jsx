import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Courses from "./page/Courses.jsx";
import JoinSeminars from "./page/JoinSeminars.jsx";
import Login from "./page/Login.jsx";
import Services from "./page/Services.jsx";
import SuccessStories from "./page/SuccessStories.jsx";
import UpcomingBatch from "./page/UpcomingBatch.jsx";
import Footer from "./ui/Footer.jsx";
import MenuBar from "./ui/MenuBar.jsx";
import TopMenu from "./ui/TopMenu.jsx";

const LayOut = () => {
  return (
    <div>
      <TopMenu />
      <MenuBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/courses", element: <Courses /> },
      { path: "/upcoming-batch", element: <UpcomingBatch /> },
      { path: "/join-seminars", element: <JoinSeminars /> },
      { path: "/success-storis", element: <SuccessStories /> },
      { path: "/servics", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
