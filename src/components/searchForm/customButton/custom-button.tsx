import React from "react";
import { Button } from "./custom-button.styles";
interface ICustomButtonProps {
  value: string;
  btnType: "button" | "submit" | "reset";
  clickHandler?: () => void;
  addClasses?: string[];
}
const CustomButton: React.FC<ICustomButtonProps> = ({
  value,
  addClasses,
  btnType,
  clickHandler,
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
      value={value}
    />
  );
};

export default CustomButton;
