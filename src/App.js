import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";

import Container from "./components/Container";
function App () {
  useLayoutEffect( () => console.log( 'LayoutEffect executed' ) );
  useEffect( () => console.log( 'Effect executed' ) );
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
