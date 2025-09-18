import { useContext } from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/Topbar/Topbar";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className={`px-6 h-screen${lightTheme ? "" : " dark"} bg-white dark:bg-black dark:text-gray-50 transition-colors duration-500 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]`}>
      <div className="pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_12%,rgba(255,255,255,1)_60%)] absolute inset-0 dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_12%,rgba(0,0,0,0.6)_30%)] mix-blend-overlay">
        </div>
      <div className="relative z-10">
        <Topbar />
        <Intro />
      </div>
    </div>
  );
}

export default App;

// bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]

// bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]

//  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_12%,rgba(255,255,255,1)_30%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_12%,rgba(0,0,0,0.6)_30%)]