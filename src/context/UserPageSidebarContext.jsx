import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [component, setComponent] = useState("main-page");

  const switchComponent = (name) => {
    setComponent(name)
  };

  return (
    <SidebarContext.Provider
      value={{
        component,
        switchComponent
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
};
