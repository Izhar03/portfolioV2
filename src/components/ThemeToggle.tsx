import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <div className="top-4 w-full text-center flex justify-center items-center bg-white dark:bg-black py-4 z-50">
      {theme === 'light' ? <div className="flex items-center">
          <p className="mr-2 text-lightText font-medium">Sorry for hurting your eyes</p>
          <Sun className="h-5 w-5 text-lightText cursor-pointer hover:opacity-80 transition-opacity" onClick={toggleTheme} />
        </div> : <div className="flex items-center">
          <p className="mr-2 text-darkText font-medium">In love with royal blue or what ?</p>
          <Moon className="h-5 w-5 text-darkText cursor-pointer hover:opacity-80 transition-opacity" onClick={toggleTheme} />
        </div>}
    </div>;
};
export default ThemeToggle;