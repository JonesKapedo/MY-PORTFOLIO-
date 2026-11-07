import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Site is dark-only. Light theme and browser chrome light colors are disabled. */
export type Theme = "dark";

const STORAGE_KEY = "gt-theme";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyDarkTheme() {
  const root = document.documentElement;
  root.classList.remove("light");
  root.classList.add("dark");
  root.style.colorScheme = "dark";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", "#030303");
  }
  try {
    localStorage.setItem(STORAGE_KEY, "dark");
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    applyDarkTheme();
  }, []);

  const setTheme = useCallback((_t: Theme) => {
    applyDarkTheme();
  }, []);

  const toggle = useCallback(() => {
    // Dark-only: no-op. Kept so existing call sites do not break.
    applyDarkTheme();
  }, []);

  const value = useMemo(
    () => ({ theme, toggle, setTheme }),
    [theme, toggle, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
