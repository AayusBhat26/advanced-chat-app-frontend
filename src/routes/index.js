import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import { Box } from "@mui/material";

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
          ],
        },
        ,
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
            { path: "app", element: <GeneralApp /> },
            {
              path: "/app/settings",
              element: <Settings />,
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
            { path: "404", element: <Page404 /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ])}
    </Box>
  );
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings"))
);
const Pomodoro = Loadable(
  lazy(()=>import("../components/pomodoroComponent/src/index"))
)
const Calendar = Loadable(
  lazy(() => import("../components/calendarComponent/src/index"))
);
const Todo = Loadable(
  lazy(() => import("../components/todoComponent/src/index"))
);

//auth
const LoginPage = Loadable(
  lazy(() => import("../pages/auth/Login"))
);
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));

const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
