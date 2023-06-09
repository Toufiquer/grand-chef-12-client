import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import About from "../pages/About/About";
import LogIn from "../pages/LogIn/LogIn";
import AddTour from "../pages/AddTour/AddTour";
import AdminDashboard from "../pages/adminDashboard/adminDashboard";
import AdminDashboardContent from "../pages/adminDashboard/AdminDashboardContent";
import DisplayCenter from "../components/DisplayCenter/DisplayCenter";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Home />
      </Main>
    ),
  },
  {
    path: "/about",
    element: (
      <Main>
        <About />
      </Main>
    ),
  },
  {
    path: "/logIn",
    element: (
      <Main>
        <LogIn />
      </Main>
    ),
  },
  {
    path: "/addTour",
    element: (
      <Main>
        <AddTour />
      </Main>
    ),
  },
  {
    path: "/adminDashboard",
    element: (
      <Main>
        <AdminDashboard />
      </Main>
    ),
    children: [
      {
        index: true,
        element: <DisplayCenter>Please Selected First</DisplayCenter>,
      },
      {
        path: ":id",
        element: <AdminDashboardContent />,
      },
    ],
  },
]);
