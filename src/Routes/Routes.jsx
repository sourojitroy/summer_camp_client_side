import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/LogSing/Login";
import SignUp from "../pages/LogSing/SignUp";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddClass from "../pages/Dashboard/AddClass";
import AllClasses from "../pages/Home/AllClasses";
import ClassList from "../pages/Dashboard/ClassList";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
// import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <SignUp></SignUp>
        },
        {
          path:'/allclasses',
          element: <AllClasses></AllClasses>
        }
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute> ,
      children:[
        {
          path:'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path:'addclass',
          element: <AddClass></AddClass>
        },
        {
          path:'classlist',
          element: <ClassList></ClassList>
        }
      ]
    }
  ]);
  