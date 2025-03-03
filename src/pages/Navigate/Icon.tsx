import { IProps, toDatas, toSignal } from "$/utils/signal";
import { twMerge } from "tailwind-merge";

export interface IIconBase {
  img: string;
  title: string;
  href: string;
  className: string;
}

export function Icon(props: IProps<IIconBase>) {
  const {
    img = toSignal(""),
    title = toSignal(""),
    href = toSignal(""),
    className = toSignal(""),
  } = toDatas(props as IIconBase);
  return (
    <div class={twMerge("p-2", className.get())}>
      <a
        class={twMerge(
          "inline-flex justify-center items-center flex-col rounded-xl shadow-2xl p-2 bg-amber-200/10 w-full h-full"
        )}
        href={href.get()}
      >
        <img src={img.get()} alt="icon" class="h-10 w-10" />
        <div class="mt-2">{title.get()}</div>
      </a>
    </div>
  );
}
