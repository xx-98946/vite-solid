import { IProps, toDatas, toSignal } from "$/utils/signal";
import { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface IBlurBase {
  src: string;
  className: string;
  children: JSX.Element;
}

/**
 * 生成模糊背景的图片
 * @returns
 */
export default function Blur(props: IProps<IBlurBase>) {
  const {
    src = toSignal(""),
    className = toSignal(""),
    children = toSignal(""),
  } = toDatas(props as IBlurBase);

  return (
    <div class={twMerge("relative", className.get())}>
      <img src={src.get()} class="absolute w-full h-full" />
      <div class="absolute size-full z-in backdrop-blur-xl bg-gray-900/20"></div>
      <div class="absolute size-full z-20">{children.get()}</div>
    </div>
  );
}
