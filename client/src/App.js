import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import { ModalProvider } from "./modal.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPanel from "./pages/UserPanel";
import ChatPage from "./pages/ChatPage";
import Header from "./components/Header";
import WhatsApp from "./components/whatsapp";
import Fields from "./components/fields";
import Tags from "./components/tags";
import Responses from "./components/responses";
import Admin from "./components/admin";
import Welcome from "./components/welcome";

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
          <Route path="/:userIns/settings" element={<WhatsApp/>}/>
          <Route path="/:userIns/settings/customFields" element={<Fields/>}/>
          <Route path="/:userIns/settings/tags" element={<Tags/>}/>
          <Route path="/:userIns/settings/fastReplies" element={<Responses/>}/>
          <Route path="/:userIns/settings/managers" element={<Admin/>}/>
          <Route path="/:userIns/settings/defaultValues" element={<Welcome/>}/>
        </Routes>
        <GlobalStyle />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
