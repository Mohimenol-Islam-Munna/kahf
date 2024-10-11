import { RouteObject } from "react-router-dom";

import { HomePage, PreviewPage, ProfilePage } from "../pages";

export const mainMenuList: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "preview",
        element: <PreviewPage />,
      },
    ],
  },
];
