import { Route, Routes } from "react-router";
import { ExampleQuery } from "./example-query";

/*
 * This component is responsible for handling its own route and possible nested routes
 * */

const ExampleRoute = () => {
  return (
    <Routes>
      <Route index element={<ExampleQuery />} />
    </Routes>
  );
};

export default ExampleRoute;
