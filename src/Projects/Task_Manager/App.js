import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import TaskManager from "./TaskManager";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <TaskManager />
    </Provider>
  );
}
export default App;
