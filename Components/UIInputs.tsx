import React, { useState, useEffect } from "react";
import classes from "./style.components/UIInput.module.scss"
interface IUIInput {
  text: string;
  type: "log" | "password";
  value: string;
  setValue: (e: React.FormEvent<HTMLInputElement>) => void;
}

const UIInput = ({ text, type, value, setValue }: IUIInput) => {
  const [error, setError] = useState<string>("");

  const validate = () => {
    if (type === "password") {
      // 1. Не допустимые символы
      // 2. Пустое поле
      // 3. Ограничение длины
      if (value.length < 5) {
        setError(`Введите еще ${6 - value.length} символов`);
      } else {
        setError("");
      }
    } else if (type === "log") {
      if (value.length < 5) {
        setError(`Введите еще ${5 - value.length} символов`);
      } else {
        setError("");
      }
    }
  };
  useEffect(() => {
    validate();
  }, [value]);
  return (
    <div className={classes["UIInput"]}>
      <input
        required
        className={
          error
            ? classes["UIInput__input"] + " " + classes["error"]
            : classes["UIInput__input"]
        }
        minLength={type === "log" ? 5 : type === "password" ? 5 : 0}
        placeholder={text}
        value={value}
        onChange={setValue}
      />
      {error && (
        <span className={classes["UIInput__errorMessage"]}> {error} </span>
      )}
    </div>
  );
};

export default UIInput;