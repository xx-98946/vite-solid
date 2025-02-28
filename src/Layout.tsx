import { getStatus, setRoutes } from "$/stores";
import { useNavigate } from "@solidjs/router";
import { JSX, onMount } from "solid-js";
import { login } from "$/api";

interface ILayoutProps {
  children?: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  const navigate = useNavigate();
  onMount(async () => {
    console.log("??layout");
    /**
     * 未登录跳转到登录页
     */
    if (!getStatus()) {
      setRoutes([]);
      navigate("/login");
      return;
    }
    /**
     * 获取静态和动态路由
     */
    await login();
  });
  return <div>{props.children}</div>;
}
