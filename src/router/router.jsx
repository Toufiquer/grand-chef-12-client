import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import LogIn from "../pages/LogIn/LogIn";
import AdminDashboard from "../pages/adminDashboard/adminDashboard";
import DisplayCenter from "../components/DisplayCenter/DisplayCenter";
import DashBoardContent from "../components/DashBoardContent/DashBoardContent";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import NotFound from "../pages/NotFound/NotFound";
import Instructor from "../pages/Instructor/Instructor";
import ClassesInstructor from "../pages/ClassesInstructor/ClassesInstructor";

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
    path: "/instructor",
    element: (
      <Main>
        <Instructor />
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
    path: "/classes/instructor/:name",
    element: (
      <Main>
        <ClassesInstructor />
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
        element: <DashBoardContent />,
      },
    ],
  },
  {
    path: "/studentDashboard",
    element: (
      <Main>
        <StudentDashboard />
      </Main>
    ),
    children: [
      {
        index: true,
        element: <DisplayCenter>Please Selected First</DisplayCenter>,
      },
      {
        path: ":id",
        element: <DashBoardContent />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
