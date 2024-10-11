import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App: FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
