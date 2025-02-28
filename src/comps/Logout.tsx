import { Button } from "$/comps/Button";
import { setRoutes, setStatus } from "$/stores";
import { useNavigate } from "@solidjs/router";

export default function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    setRoutes([]);
    setStatus(false);
    navigate("/login");
  }

  return (
    <Button
      baseClass={Button.orangeFill}
      class="text-sm m-0"
      onclick={handleLogout}
    >
      退出登录
    </Button>
  );
}
