import { splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export interface IClassProps {
  baseClass?: string;
  class?: string;
}

/**
 * 样式生效层级
 * 1. baseClass
 * 2. props.baseClass
 * 3. props.class
 * @param props
 * @param baseClass
 * @returns
 */
export function splitClass<T extends IClassProps>(props: T, baseClass = "") {
  const [known, rest] = splitProps(props, ["baseClass", "class"]);
  // @ts-ignore
  const className = twMerge(baseClass, known.baseClass, known.class);
  return {
    class: className,
    ...rest,
  };
  // return { class: finalClass, ...rest, };
}
