import { Button } from "./components/ui/button";
import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Toggler", icon: "🎨" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={isDark ? "outline" : "default"}
              className="flex items-center gap-2 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200 px-4 py-2 rounded-lg"
            >
              <span>{section.icon}</span>
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">React Props Explained</h1>
            <p className="text-gray-300 text-lg">
              Explore different types of props in React with examples and
              explanations.
            </p>
          </header>

          <div className="space-y-16">
            <section
              id="basic"
              className="scroll-mt-32 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow"
            >
              <BasicProps />
            </section>

            <section
              id="children"
              className="scroll-mt-32 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow"
            >
              <ChildrenProps />
            </section>

            <section
              id="complex"
              className="scroll-mt-32 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow"
            >
              <ComplexProps />
            </section>

            <section
              id="ref"
              className="scroll-mt-32 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow"
            >
              <RefProps />
            </section>

            <section
              id="theme"
              className="scroll-mt-32 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow"
            >
              <ThemeToggler />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
