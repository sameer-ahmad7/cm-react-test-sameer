import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, rootReducer } from "./rootReducer";
import Chatbot from "./containers/Chatbot/Chatbot";
import "./styles.css";

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Chatbot/>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
