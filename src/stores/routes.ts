import { IRoute, IRoutePlain, toRoutes } from "$/utils/route";
import { toSignal } from "$/utils/signal";

const staticRoutes = [
  { path: "/", component: "$/pages/Home", title: "首页" },
  { path: "/*404", component: "$/pages/NotFound", title: "404" },
  { path: "/login", component: "$/pages/Login", title: "登录" },
];

const routes = toSignal<IRoute[]>(toRoutes(staticRoutes));

export function setRoutes(newRoutes: IRoutePlain[] = []) {
  routes.set(toRoutes([...staticRoutes, ...newRoutes]));
}

export function getRoutes() {
  return routes.get();
}
