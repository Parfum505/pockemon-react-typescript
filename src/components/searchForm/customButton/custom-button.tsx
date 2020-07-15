import React from "react";
import { Button } from "./custom-button.styles";
interface ICustomButtonProps {
  value: string;
  btnType: "button" | "submit" | "reset";
  isDisabled?: boolean;
  clickHandler?: () => void;
  addClasses?: string[];
}
const CustomButton: React.FC<ICustomButtonProps> = ({
  value,
  addClasses,
  btnType,
  clickHandler,
  isDisabled,
}) => {
  let allClasses = ["btn"];
  if (addClasses?.length) {
    allClasses = allClasses.concat(addClasses);
  }
  return (
    <Button
      className={allClasses.join(" ")}
      type={btnType}
      onClick={clickHandler}
      disabled={isDisabled}
      value={value}
    />
  );
};

export default CustomButton;
