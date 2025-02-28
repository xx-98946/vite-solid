import { IRoute, IRoutePlain } from "$/utils/route";
import { lazy } from "solid-js";
const pageModules = import.meta.glob("$/pages/**/index.tsx");

function getComponent(component: string | Function) {
  if (typeof component != "string") {
    return component;
  }
  // 命中路由
  let realpath = component.endsWith("index.tsx")
    ? component
    : component + "/index.tsx";
  // 修改别名
  realpath = realpath.replace(/^\$/, "/src");
  return lazy(pageModules[realpath] as any);
}

/**
 * 将json转变为可用路由
 * @param routesData
 */
export function toRoutes(routesData: IRoutePlain[]): IRoute[];
// @ts-ignore
export function toRoutes(routesData) {
  // debugger
  // console.log("??parent", routesData);
  // @ts-ignore
  routesData.forEach((item) => {
    if (item.component) {
      const Comp = getComponent(item.component);
      item.component = Comp;
    }
    if (item.children) {
      toRoutes(item.children);
    }
  });
  // console.log("??routesData", routesData);
  return routesData;
}
