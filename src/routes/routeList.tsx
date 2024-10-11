import { MainLayout } from "../components/Layout";
import { NotFoundPage } from "../pages/NotFoundPage";
import { mainMenuList } from "./mainMenuList";
import { RouteObject } from "react-router-dom";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: mainMenuList,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
