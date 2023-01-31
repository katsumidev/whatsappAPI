import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ModalProvider } from "./modal.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPanel from "./pages/UserPanel";
import ChatPage from "./pages/ChatPage";
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
          <Route path="/:userIns/live-chat/:chatId?" element={<ChatPage />} />
        </Routes>
        <GlobalStyle />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
