import { twMerge } from "tailwind-merge";
import { JSX } from "solid-js";
import { IProps, toDatas, toSignal } from "$/utils/signal";

/**
 * 基本类型
 */
interface IBase {
  value: string;
  className: string;
  baseClass: string;
  disabled: boolean;
  type: string;
}

/**
 * 时间类型单独定义
 */
interface IEvents {
  onchange?: (value: string) => void;
  onfocus?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
  onblur?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent>;
}

/**
 * 参数类型
 */
export type IInputProps = IProps<IBase> & IEvents;
export default function Input(props: IInputProps) {
  const datas = toDatas(props as IBase);
  const {
    value = toSignal(""),
    className = toSignal(""),
    baseClass = toSignal(
      "shadow border border-gray-300 flex m-2 p-1 outline-0 rounded-md focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200",
    ),
    disabled = toSignal(false),
    type = toSignal("text"),
  } = datas;

  const computedClass = () => {
    return twMerge(baseClass.get(), className.get());
  };

  const handleInput: JSX.InputEventHandlerUnion<
    HTMLInputElement,
    InputEvent
  > = (e) => {
    value.set(e.target.value);
    props.onchange && props.onchange(e.target.value);
  };

  return (
    <input
      value={value.get()}
      class={computedClass()}
      disabled={disabled.get()}
      type={type.get()}
      oninput={handleInput}
      onfocus={props.onfocus}
      onblur={props.onblur}
    ></input>
  );
}
