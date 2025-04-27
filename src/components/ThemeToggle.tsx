
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <Sun className="h-5 w-5 text-current" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
      />
      <Moon className="h-5 w-5 text-current" />
    </div>
  );
};

export default ThemeToggle;
