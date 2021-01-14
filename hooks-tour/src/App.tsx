// import logo from "./logo.svg";
import "./App.css";
import React, { useContext, Fragment } from "react";

import { Store } from "./Store";

export default function App(): JSX.Element {
  const store = useContext(Store);
  return (
    <Fragment>
      {console.log(store)}
      <h1>Pick your favourite episode</h1>
    </Fragment>
  );
}

// export default App;
