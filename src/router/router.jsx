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
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Payment/Payment";
import InstructorDashboard from "../pages/InstructorDashboard/InstructorDashboard";
import AdminAddClass from "../pages/adminDashboard/AdminAddClass";
import AdminMyAllClass from "../pages/adminDashboard/AdminMyAllClass";
import AdminFeedback from "../pages/adminDashboard/AdminFeedback";
import AdminTotalEnrollmentStudent from "../pages/adminDashboard/AdminTotalEnrollmentStudent";
import AdminTotalEnrollmentInstructor from "../pages/adminDashboard/AdminTotalEnrollmentInstructor";

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
    path: "/logIn",
    element: (
      <Main>
        <LogIn />
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
    path: "/classes/instructor/:name",
    element: (
      <Main>
        <ClassesInstructor />
      </Main>
    ),
  },
  {
    path: "/classes",
    element: (
      <Main>
        <Classes />
      </Main>
    ),
  },
  {
    path: "/payment/:email",
    element: (
      <Main>
        <Payment />
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
        path: "adminAddClass",
        element: <AdminAddClass />,
      },
      {
        path: "adminMyAllClass",
        element: <AdminMyAllClass />,
      },
      {
        path: "adminTotalEnrolledStudent",
        element: <AdminTotalEnrollmentStudent />,
      },
      {
        path: "adminTotalEnrolledInstructor",
        element: <AdminTotalEnrollmentInstructor />,
      },
      {
        path: "adminFeedBack",
        element: <AdminFeedback />,
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
  {
    path: "/instructorDashboard",
    element: (
      <Main>
        <InstructorDashboard />
      </Main>
    ),
    children: [
      {
        index: true,
        element: <DisplayCenter>Please Selected First</DisplayCenter>,
      },
      {
        path: ":id",
        element: <DashBoardContent />, // it's a global component all dashboard can use it.
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
