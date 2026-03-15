import { createContext, useState , useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeToggleButton(){
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-5 py-2 rounded-lg font-medium transition-all duration-300
        ${isDark 
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-gray-800 text-white hover:bg-gray-700"
        }
      `}
    >
      Switch to {isDark ? "Light 🌞" : "Dark 🌑"} Theme
    </button>
  )
}

function ThemeCard({title , children}){
  const {isDark} = useTheme();

  return (
    <div
      className={`p-6 rounded-xl shadow-md transition-all duration-300
        ${isDark 
          ? "bg-gray-800 text-white border border-gray-700"
          : "bg-gray-100 text-gray-900 border border-gray-300"
        }
      `}
    >
      <p className="text-sm opacity-80 mb-2">
        This is a {isDark ? "dark" : "light"} theme card.
      </p>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <div className="text-sm opacity-90">
        {children}
      </div>
    </div>
  )
}

function ThemeToggler() {
  return (
    <section className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-md space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Theme Toggler
        </h1>

        <p className="text-gray-300 max-w-2xl">
          This example demonstrates how React Context can be used to manage
          global UI state such as application themes.
        </p>
      </div>

      <ThemeToggleButton />

      <div className="grid md:grid-cols-2 gap-6">
        <ThemeCard title="Example Card">
          Theme changes will affect all components consuming the theme context.
        </ThemeCard>

        <ThemeCard title="Reusable UI">
          Context helps avoid prop drilling when passing global state through
          many nested components.
        </ThemeCard>
      </div>

    </section>
  );
}

export default ThemeToggler;