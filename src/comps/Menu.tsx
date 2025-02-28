import { flatRoutes } from "$/utils/route";
import { For } from "solid-js";
import Logout from "./Logout";
import { getRoutes } from "$/stores";

export default function Menu() {
  const plainRoutes = () => flatRoutes(getRoutes());

  return (
    <div class="flex items-center bg-amber-200 p-2 justify-between">
      <div class=" flex items-center">
        <For each={plainRoutes()}>
          {(item) => {
            return (
              <a href={item.leafPath} class="px-2">
                {item.title || item.leafPath}
              </a>
            );
          }}
        </For>
      </div>
      <Logout />
    </div>
  );
}
