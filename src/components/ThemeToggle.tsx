
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      {theme === 'light' ? (
        <div className="flex items-center">
          <p className="mr-2 text-lightText font-medium">Sorry for hurting your eyes</p>
          <Switch
            checked={false}
            onCheckedChange={toggleTheme}
          />
          <Sun className="h-5 w-5 ml-2 text-lightText" />
        </div>
      ) : (
        <div className="flex items-center">
          <p className="mr-2 text-darkText font-medium">You like it that way, thanks :)</p>
          <Switch
            checked={true}
            onCheckedChange={toggleTheme}
          />
          <Moon className="h-5 w-5 ml-2 text-darkText" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
