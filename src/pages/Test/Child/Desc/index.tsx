import { onMount } from "solid-js";

export default function Desc() {
  onMount(() => {
    console.log("Desc");
  });
  return <div>子孙</div>;
}
