import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [formData, setFormdata] = useState({
    title: "",
    description: "",
  });
  return (
    <GlobalContext.Provider value={{ formData, setFormdata }}>
      {children}
    </GlobalContext.Provider>
  );
}
