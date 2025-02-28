import { type Accessor, createSignal, type Setter } from "solid-js";

/**
 * 信号类型
 */
export interface ISignal<T> {
  get: Accessor<T>;
  set: Setter<T>;
}

/**
 * 基本类型或者信号类型
 */
export type IProps<T extends Object> = {
  [K in keyof Partial<T>]: T[K] | ISignal<T[K]>;
};

/**
 * 只能是信号类型
 */
export type IDatas<T extends Object> = {
  [K in keyof T]: ISignal<T[K]>;
};

/**
 * 将原始值处理为信号
 * @param value
 * @returns
 */
export function toSignal<T>(value: T | ISignal<T>): ISignal<T> {
  if (
    typeof value == "object" &&
    (value as ISignal<T>).get &&
    (value as ISignal<T>).set
  ) {
    return value as ISignal<T>;
  }
  const [get, set] = createSignal<T>(value as T);
  return { get, set };
}

/**
 * 将对象中的每一项转变为signal
 * @param origin
 * @returns
 */
export function toDatas<T extends Object>(origin: T): IDatas<T> {
  // @ts-ignore
  const result: IDatas<T> = {};
  Object.keys(origin).forEach((key) => {
    // @ts-ignore
    result[key] = toSignal(origin[key]);
  });
  return result;
}
