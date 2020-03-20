import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";
import { Container, View } from "./styles/baseStyle.js";

import Header from "./components/Header";
import Board from "./components/Board";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Dashboard />
        <View>
          <Header />
          <Board />
        </View>
        <GlobalStyle />
      </Container>
    </DndProvider>
  );
}

export default App;
