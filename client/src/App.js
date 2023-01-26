import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ModalProvider } from "./modal.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPanel from "./pages/UserPanel";

function App() {
  localStorage.setItem("userToken", "teste")

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/panel/:userIns" element={<UserPanel />} />
        </Routes>
        <GlobalStyle />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
