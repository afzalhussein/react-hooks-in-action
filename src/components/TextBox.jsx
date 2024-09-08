import React, { useState } from "react";

export default function TextBox({ data, display = true }) {
  const styles = { display: "flex", justifyContent: "space-between" };
  const [show, hide] = useState(display);
  return (
    <>
      <div style={styles} className="title">
        {show && <em>{data.title}</em>}
        <button onClick={() => hide(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
      {show && <p>{data.description}</p>}
    </>
  );
}
