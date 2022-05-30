import { useEffect, useLayoutEffect, useState } from "react";

type Theme = [String | null, () => void];

const useTheme = (): Theme => {
  const [theme, setTheme] = useState<String | null>(null);
  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, handleChangeTheme];
};
export default useTheme;
