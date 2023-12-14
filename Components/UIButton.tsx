import React from "react";
import classes from "./style.components/UIButton.module.scss"

interface IUIButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
}

const UIButton = ({ type, children, onClick }: IUIButton) => {
  return (
    <div
      onClick={onClick}
      className={
        type == "string"
          ? classes["UIButton"] + " " + classes["string"]
          : type == "number"
          ? classes["UIButton"] + " " + classes["number"]
          : type == "radio"
          ? classes["UIButton"] + " " + classes["radio"]
          : type == "range"
          ? classes["UIButton"] + " " + classes["range"]
          : classes["UIButton"] + " " + classes["active"]
      }
    >
      {children}
    </div>
  );
};
export default UIButton;