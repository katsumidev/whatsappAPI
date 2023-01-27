import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ModalProvider } from "./modal.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPanel from "./pages/UserPanel";
import Header from "./components/Header";

function App() {
  localStorage.setItem("userToken", "teste")

  return (
    <BrowserRouter>
      <ModalProvider>
        <Header />
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
