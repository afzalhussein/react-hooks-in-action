import React, { useState, memo } from "react";

function TextBox({ data, display = true }) {
  const styles = { display: "flex", justifyContent: "space-between" };
  const [ show, hide ] = useState( display );
  console.log( 'TextBox rendered' );
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
export default memo( TextBox );