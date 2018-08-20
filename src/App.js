import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux"; //an import from the redux library

const initialState = { tech: 'React'};
const store = createStore(reducer, initialState);  // an incomplete solution - for now.


class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
