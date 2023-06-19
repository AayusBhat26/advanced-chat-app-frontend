import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/main";

// config
// import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import { Box } from "@mui/material";
import GeneralApp from "../pages/dashboard/GeneralApp";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return (
    <Box
      sx={{
        display: "flex",
        // width:
      }}
    >
      {useRoutes([
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            {
              element: <LoginPage />,
              path: "login",
            },
            {
              element: <RegisterPage />,
              path: "register",
            },
            {
              element: <ResetPasswordPage />,
              path: "reset-password",
            },
            {
              element: <NewPasswordPage />,
              path: "new-password",
            },
            {
              element: <Verify />,
              path: "verify",
            },
          ],
        },
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            // { element: <Navigate to={DEFAULT_PATH}  />, index: true },
            {
              path: "/",
              element: <ComponentDesc />,
            },
            // {
            //   path:"app", element: <div>hi</div>
            // },
            { path: "app", element: <GeneralApp /> },
            {
              path: "/app/settings",
              element: <Settings />,
            },
            {
              path: "/app/profile",
              element: <ProfilePage />,
            },
            {
              path: "/app/pomodoro",
              element: <Pomodoro />,
            },
            {
              path: "/app/calendar",
              element: <Calendar />,
            },
            {
              path: "/app/todo",
              element: <Todo />,
            },
            {
              path: "/app/todo/boards/:boardId",
              element: <Board />,
            },
            { path: "404", element: <Page404 /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ])}
    </Box>
  );
}
// general app
// const GeneralApp = Loadable(
//   lazy(() => import("../pages/dashboard/GeneralApp"))
// );
// desc 
const ComponentDesc=Loadable(
  lazy(()=>import("../components/AppDesc/index"))
)
// setting page
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/settings"))
);
// pomodoro page
const Pomodoro = Loadable(
  lazy(()=>import("../components/pomodoroComponent/src/index"))
)
// calendar page
const Calendar = Loadable(
  lazy(() => import("../components/calendarComponent/src/index"))
);
// todo page
const Todo = Loadable(
  lazy(() => import("../components/todoComponent/index"))
);
// login page
const LoginPage = Loadable(
  lazy(() => import("../pages/auth/Login"))
);
// register page
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
// reset password page
const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
// new password page
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);
// profile page
const ProfilePage=Loadable(lazy(()=>import("../pages/dashboard/Profile.js")))


// verify otp
const Verify = Loadable(lazy(() =>import("../pages/auth/Verify")));

// particular board
const Board = Loadable(lazy(()=>import("../components/todoComponent/src/pages/Board")))
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
