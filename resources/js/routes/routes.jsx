import {
  createBrowserRouter,
} from "react-router-dom";
import GuestLayout from "../app/layouts/guest-layout";
import HomePage from "../app/pages/home/home-page";
import TeamPage from "../app/pages/team/team-page";
import ProductPage from "../app/pages/projects/project-page";
import CalendarPage from "../app/pages/calendar/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element:<HomePage />,
      },
      {
        path: 'team',
        element:<TeamPage />
      },
      {
        path: 'project',
        element:<ProductPage />
      },
      {
        path: 'calendar',
        element:<CalendarPage />
      }
    ]
  },
]);

