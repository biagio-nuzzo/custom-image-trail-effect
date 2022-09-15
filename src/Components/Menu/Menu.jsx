import React from "react";

// Components
import InputField from "../InputField/InputField";
import CheckBox from "../CheckBox/CheckBox";

// Styles
import Style from "./Menu.module.css";

const Menu = (props) => {
  function updateComponent() {
    props.setShow(false);
    setTimeout(() => {
      props.setShow(true);
    }, 100);
  }

  return (
    <div className={Style.mainContainer}>
      <div className={Style.header}>
        <h3>Menu</h3>
        <p>Next to the label, in parentheses, is the recommended value</p>
      </div>
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="animationFadeDuration (0.2)"
        placeholder="animationFadeDuration"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("animationFadeDuration")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="animationFadeDelay (0.4"
        placeholder="animationFadeDelay"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("animationFadeDelay")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="animationMoveDuration (0.5)"
        placeholder="animationMoveDuration"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("animationMoveDuration")}
      />
      <InputField
        label="animationFadeType (linear)"
        placeholder="animationFadeType"
        type="text"
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("animationFadeType")}
      />
      <div className={Style.link}>
        <a
          href="https://www.w3schools.com/css/css3_transitions.asp"
          target="_blank"
          rel="noreferrer"
        >
          Resource
        </a>
      </div>

      <InputField
        label="animationMoveType (ease-in-out)"
        placeholder="animationMoveType"
        type="text"
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("animationMoveType")}
      />
      <div className={Style.link}>
        <a
          href="https://www.w3schools.com/css/css3_transitions.asp"
          target="_blank"
          rel="noreferrer"
        >
          Resource
        </a>
      </div>
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="endOpacity (0)"
        placeholder="endOpacity"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("endOpacity")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="endScale"
        placeholder="endScale (0.5)"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("endScale")}
      />
      <div className={Style.checkBoxClass}>
        <div className={Style.checkBoxContainer}>
          <CheckBox
            size={18}
            {...props.form.getInputProps("floater")}
            onClick={() => {
              updateComponent();
            }}
          />
        </div>
        <p>
          Activate floating at the end of the animation. Is recommended use this
          feature with an endOpacity {">"} 0
        </p>
      </div>
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="imageHeight (50px for this images)"
        placeholder="imageHeight"
        type="number"
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("imageHeight")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="imageWidth (50px for this images)"
        placeholder="imageWidth"
        type="number"
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("imageWidth")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="maxImageCount (20)"
        placeholder="maxImageCount"
        type="number"
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("maxImageCount")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="movementXRation (1)"
        placeholder="movementXRation"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("movementXRation")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="movementYRation (1)"
        placeholder="movementYRation"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("movementYRation")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="spawnAdjustmentXValue (2)"
        placeholder="spawnAdjustmentXValue"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("spawnAdjustmentXValue")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="spawnAdjustmentYValue (3)"
        placeholder="spawnAdjustmentYValue"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("spawnAdjustmentYValue")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="startOpacity (1)"
        placeholder="startOpacity"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("startOpacity")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="startScale (1)"
        placeholder="startScale"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("startScale")}
      />
      <InputField
        style={{
          marginBottom: "25px",
        }}
        label="triggerDistance (80)"
        placeholder="triggerDistance"
        type="number"
        step={0.1}
        onChange={() => {
          updateComponent();
        }}
        {...props.form.getInputProps("triggerDistance")}
      />
    </div>
  );
};

export default Menu;
