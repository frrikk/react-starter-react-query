import * as React from "react";
import { Outlet } from "react-router";
import Routes from "@/routes";

export default function App() {
  return (
    <main>
      <Routes />
      <Outlet />
    </main>
  );
}
