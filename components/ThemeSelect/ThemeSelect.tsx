import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Code } from "react-feather";
import { VisuallyHidden } from "components/VisuallyHidden";
import * as styles from "./ThemeSelect.css";

const icons = {
  system: <Monitor width=".9em" />,
  light: <Sun width=".9em" />,
  dark: <Moon width=".9em" />,
} as const;

const ThemeSelect = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <VisuallyHidden>
        <label htmlFor="themeSelect">Select theme</label>
      </VisuallyHidden>
      <div className={styles.root}>
        <span className={styles.icon}>
          {icons[theme as keyof typeof icons]}
        </span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className={styles.select}
          id="themeSelect"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <span className={styles.arrow}>
          <Code width=".9em" style={{ transform: "rotate(90deg)" }} />
        </span>
      </div>
    </>
  );
};

export { ThemeSelect };
