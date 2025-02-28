import { toSignal } from "$/utils/signal";
import Input, { IInputProps } from "./Input";

type IPasswordProps = IInputProps;

export default function Password(props: IPasswordProps) {
  const type = toSignal("password");
  function handleFocus() {
    type.set("text");
  }

  function handleBlur() {
    type.set("password");
  }
  return (
    <Input {...props} type={type} onfocus={handleFocus} onblur={handleBlur} />
  );
}
