import { setRoutes, setStatus } from "$/stores";

export async function login() {
    const dynamicRoutes = await (await fetch("/routes.json")).json();
    setRoutes(dynamicRoutes);
    setStatus(true);
}