import React from "react";
import { useState } from "react/cjs/react.development";

export default function Item(props) {
  const [check, setCheck] = useState(true);
  const isDisabled = props.isDisabled;
  return (
    <div className={"check"}>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check);
          props.isChecked(check);
        }}
        disabled={isDisabled && check ? "disabled" : ""}
      />
      {props.content}
    </div>
  );
}
