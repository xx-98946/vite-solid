import { IProps, toDatas, toSignal } from "$/utils/signal";
import { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface ILabelBase {
  children: JSX.Element;
  baseClass: string;
  className: string;
}
export default function Label(props: IProps<ILabelBase>) {
  const {
    children = toSignal(""),
    baseClass = toSignal("flex items-center"),
    className = toSignal(""),
  } = toDatas(props as ILabelBase);

  const computedClass = () => {
    return twMerge(baseClass.get(), className.get());
  };

  return <label class={computedClass()}>{children.get()}</label>;
}
