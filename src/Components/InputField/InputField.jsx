import React, { useState } from "react";

// Icons
import { TbArrowLeft } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";

// Styles
import Style from "./InputField.module.css";

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

const InputField = ({
  className,
  deleteIcon = true,
  error = { value: null },
  errorIcon = true,
  icon,
  label,
  onChange,
  onPaste = true,
  onCopy = true,
  placeholder,
  required,
  setValue,
  step = 1,
  style,
  successIcon = true,
  type,
  validationOnBlur = true,
  validationOnInput = false,
  value,
}) => {
  // Variables
  const [inputType, setInputType] = useState(type);
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <div
      className={Style.componentContainer}
      onMouseOver={() => {
        if (type === "password") {
          setEyeIcon(true);
        }
      }}
      onMouseLeave={() => {
        if (type === "password") {
          setEyeIcon(false);
        }
      }}
    >
      {label && <div className={Style.label}>{label}</div>}
      <div
        className={classNames(
          error.value === null
            ? Style.inputFieldContainerEmpty
            : error.value === false
            ? Style.inputFieldContainerError
            : Style.inputFieldContainer,
          className
        )}
        style={style}
      >
        {/* Icon and Input */}
        <span className={Style.inputClass}>
          <span>
            {deleteIcon && error.value === false ? (
              <TbArrowLeft
                className={Style.deleteIcon}
                onClick={() => {
                  setValue("", false);
                }}
              />
            ) : (
              icon
            )}
          </span>
          <input
            className={Style.input}
            type={inputType}
            placeholder={placeholder}
            value={value}
            step={step}
            onChange={(e) => {
              if (onChange !== undefined) {
                onChange(e);
              }
            }}
            // onInput Function
            onInput={(e) => {
              if (validationOnInput) {
                setValue(e.target.value);
              } else {
                setValue(e.target.value, false);
              }
            }}
            // onBlur Function
            onBlur={(e) => {
              if (validationOnBlur) {
                setValue(e.target.value);
              }
            }}
            // onPaste Function
            onPaste={(e) => {
              if (!onPaste) {
                e.preventDefault();
              }
            }}
            // onCopy Function
            onCopy={(e) => {
              if (!onCopy) {
                e.preventDefault();
              }
            }}
          />
        </span>

        {/* Status icon */}
        {eyeIcon === true ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (inputType === "password") {
                setInputType("text");
              } else {
                setInputType("password");
              }
            }}
          >
            <HiOutlineEye />
          </span>
        ) : (
          <span>
            {error.value === true
              ? successIcon === true &&
                required && <AiOutlineCheck className={Style.successIcon} />
              : error.value === false &&
                errorIcon === true && (
                  <FiAlertTriangle className={Style.alertIcon} />
                )}
          </span>
        )}
      </div>

      {error.message && (
        <div className={Style.errorMessage}>{error.message}</div>
      )}
    </div>
  );
};

export default InputField;
