import { createContext, useState } from "react";

export const NewsModalContext = createContext();

export const NewsModalProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [modalNews, setModalNews] = useState({
    title: "",
    text: "",
    author: "",
    image: ""
  })

  const openModalNews = () => {
    setIsShow(true)
  };

  const closeModalNews = () => {
    setIsShow(false)
  };

  return (
    <NewsModalContext.Provider
      value={{
        isShow,
        openModalNews,
        closeModalNews,
        modalNews,
        setModalNews,
      }}
    >
      {children}
    </NewsModalContext.Provider>
  )
};