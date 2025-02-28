import { login } from "$/api";
import { Button } from "$/comps/Button";
import Input from "$/comps/Input";
import Password from "$/comps/Password";
import { toSignal } from "$/utils/signal";
import { useNavigate } from "@solidjs/router";

export default function Login() {
  const navigate = useNavigate();
  const userName = toSignal("");
  const password = toSignal("");

  async function handleSubmit() {
    if (userName.get() != "xx" || password.get() != "mm") {
      alert("账号或者密码不正确");
      return;
    }
    await login();
    navigate("/");
  }

  return (
    <div class="flex justify-center flex-col items-center gap-4 pt-10">
      <div class="font-bold text-2xl my-10">登录页</div>
      <div class="flex items-center w-1/4">
        <p class="w-20 shrink-0 grow-0">用户名：</p>
        <Input value={userName} className="flex-1" />
      </div>
      <div class="flex items-center w-1/4">
        <p class="w-20  shrink-0 grow-0">密码：</p>
        <Password value={password} className="flex-1" />
      </div>
      <Button baseClass={Button.blueFill} class="w-1/4" onclick={handleSubmit}>
        登录
      </Button>
    </div>
  );
}
