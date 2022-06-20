import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeThemeHandler } from "../Features/theme";

const ChangeColor = () => {
  const [currentColor, setCurrentColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="color" onChange={(e) => setCurrentColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeThemeHandler(currentColor));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
};

export default ChangeColor;
