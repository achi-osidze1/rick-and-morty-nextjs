import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="min-h-screen bg-[#f2f3f6] dark:bg-[#1b2838]">
        {children}
      </main>
    </>
  );
};
