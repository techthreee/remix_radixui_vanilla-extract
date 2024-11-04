import { Button } from "@radix-ui/themes";
import { button } from "~/components/base/Button/style.css";

type ButtonProps = {
  /**
   * Buttonに表示するテキスト
   */
  text: string;
};

export const BaseButton = ({ text }: ButtonProps) => {
  return <Button className={button}>{text}</Button>;
};
