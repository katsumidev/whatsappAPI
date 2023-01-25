import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modalState, setState] = useState({ visible: false });

  const openModal = (payload) => setState({ visible: true });
  const closeModal = () => setState({ visible: false });

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
