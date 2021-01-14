import React, { createContext, useContext } from "react";

// const { Provider, Consumer } = createContext();
const Store = createContext();

export function Parent(props) {
  const text = "random text";
  const text2 = () => "hello";

  // return <Provider value={text}>{props.children}</Provider>;
  return (
    <Store.Provider value={{ text, text2 }}>{props.children}</Store.Provider>
  );
}

export function Child() {
  const { text, text2 } = useContext(Store);

  return (
    <div>
      {text}
      {text2()}
    </div>
  );

  // return <Consumer>{(text) => <div>{text}</div>}</Consumer>;
}
