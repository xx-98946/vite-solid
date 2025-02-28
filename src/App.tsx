import { Router } from "@solidjs/router";
import { getRoutes } from "$/stores";
import Layout from "./Layout";
import { createEffect } from "solid-js";

export default function App() {
  createEffect(() => {
    console.log("??路由", getRoutes());
  });
  return <Router root={Layout}>{getRoutes()}</Router>;
}
