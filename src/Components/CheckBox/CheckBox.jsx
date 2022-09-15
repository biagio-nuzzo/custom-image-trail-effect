import React from "react";

// Icons
import { AiOutlineCheck } from "react-icons/ai";

// Styles
import Style from "./CheckBox.module.css";

const CheckBox = ({ className, size = "25px", setValue, value, onClick }) => {
  function classNames(...classes) {
    const finalClasses = [];
    classes.forEach((classEntry) => {
      if (typeof classEntry === "string") {
        finalClasses.push(classEntry);
      } else if (typeof classEntry === "object") {
        if (classEntry.condition) {
          finalClasses.push(classEntry.class);
        }
      }
    });
    return finalClasses.join(" ");
  }

  return (
    <div
      className={classNames(
        Style.checkBox,
        value ? Style.checkboxChecked : Style.checkboxNotChecked,
        className
      )}
      style={{
        width: size,
        height: size,
      }}
      onClick={() => {
        setValue(!value);

        if (onClick !== undefined) {
          onClick();
        }
      }}
    >
      {value && <AiOutlineCheck />}
    </div>
  );
};

export default CheckBox;
