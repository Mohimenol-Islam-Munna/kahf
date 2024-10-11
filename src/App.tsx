import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App: FC = (): JSX.Element => {
  return (
    <div className="text-black">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
