import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [formData, setFormdata] = useState({
    title: "",
    description: "",
  });

  const [blogList, setBlogList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        blogList,
        setBlogList,
        pending,
        setPending,
        formData,
        setFormdata,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
