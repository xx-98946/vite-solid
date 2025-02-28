import { RouteDefinition } from "@solidjs/router";
import { JSX } from "solid-js";

/**
 * 路由类型
 */
export interface IRoute extends RouteDefinition {
  children?: IRoute[];
  title?: string;
  // id: string | number; // 唯一标识
}

/**
 * 路由接口类型
 */
export interface IRoutePlain extends Omit<IRoute, "component"> {
  component: string;
}

/**
 * 页面类型
 */
export interface IPage {
  children?: JSX.Element;
}

/**
 * 获取叶子节点
 * @param routes
 * @returns
 */
function getLeafNodes(routes: IRoute[]) {
  const leafNodes: IRoute[][] = [];
  function traverse(route: IRoute, parent: IRoute[] = []) {
    // 是叶子节点
    if (!route.children || route.children.length === 0) {
      leafNodes.push([...parent, route]);
    } else {
      // 不是叶子节点
      route.children.forEach((child) => traverse(child, [...parent, route]));
    }
  }

  routes.forEach((route) => traverse(route));
  return leafNodes;
}

/**
 * 打平树结构的路由，并添加leafPath
 * @param routes
 * @returns
 */
export function flatRoutes(routes: IRoute[]) {
  const leafNodes = getLeafNodes(routes);
  return leafNodes.map((item) => {
    return {
      ...item.at(-1), // 数组的最后一个节点是叶子节点
      leafPath: item
        .reduce((path, route) => {
          return path + route.path;
        }, "")
        .replace(/\/\//, "/"),
    };
  });
}

export * from "./toRoutes";
