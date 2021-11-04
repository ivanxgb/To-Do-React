import React from "react";
import { TodoProvider } from "../TodoContext/TodoContext";
import { AppContainer } from "./AppContainer";

function App() {
  return (
    <TodoProvider>
      <AppContainer />
    </TodoProvider>
  );
}

export default App;
