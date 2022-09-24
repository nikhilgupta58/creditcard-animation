import React from "react";

export const Context = React.createContext(null);

export const useContext = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("useContect must only be used within its Provider");
  }

  return context;
};
