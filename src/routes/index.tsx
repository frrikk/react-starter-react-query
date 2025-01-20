import { lazy } from "react";

const ExampleRoute = lazy(() => import("./example"));

/*
 * This component is responsible for handling the apps routes and lazy loads each route when needed
 * */

const Routes = () => {
  return <ExampleRoute />;
};

export default Routes;
