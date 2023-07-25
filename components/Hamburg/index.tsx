import React from "react";
import "./Hamburg.css";

const Hamburg = ({ onChange }: { onChange: (check: boolean) => void }) => {
  return (
    <label className="menu-button-container py-4 px-1" htmlFor="menu-toggle">
      <input
        id="menu-toggle"
        type="checkbox"
        onChange={(was) => {
          onChange(was.target.checked);
        }}
      />
      <div className="menu-button"></div>
    </label>
  );
};

export default Hamburg;
