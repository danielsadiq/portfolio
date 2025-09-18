// PatternBackground.tsx
// import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// interface PatternBackgroundProps {
//   children: React.ReactNode;
// }

// const PatternBackground: React.FC<PatternBackgroundProps> = ({ children }) => {
//   const { lightTheme } = useContext(ThemeContext);

//   const backgroundClass = lightTheme
//     ? "bg-white bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
//     : "bg-black bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]";

//   return (
//     <div
//       className={`min-h-screen ${backgroundClass} bg-[size:40px_40px]`}
//     >
//       {children}
//     </div>
//   );
// };

// export default PatternBackground;


// PatternBackground.tsx
import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
  /** grid square size in px */
  size?: number;
  /** how strong the grid lines are in light theme (0..1) */
  lightStrength?: number;
  /** how strong the grid lines are in dark theme (0..1) */
  darkStrength?: number;
  /** where the radial fade reaches full cover (0..100) */
  fadeStopPct?: number;
};

const PatternBackground: React.FC<Props> = ({
  children,
  size = 40,
  lightStrength = 0.08,
  darkStrength = 0.18,
  fadeStopPct = 65,
}) => {
  const { lightTheme } = useContext(ThemeContext);

  // grid line color (stronger on dark theme)
  const gridColor = lightTheme
    ? `rgba(0,0,0,${lightStrength})`
    : `rgba(255,255,255,${darkStrength})`;

  // radial overlay: transparent center -> full background color at edges
  const overlayGradient = lightTheme
    ? `radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) ${fadeStopPct}%)`
    : `radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${fadeStopPct}%)`;

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: lightTheme ? "#ffffff" : "#000000",
    backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: overlayGradient,
    // ensure overlay sits above grid but below content
    zIndex: 20,
  };

  return (
    <div className="relative" style={containerStyle}>
      <div style={overlayStyle} />
      <div className="relative z-30">{children}</div>
    </div>
  );
};

export default PatternBackground;


{/* <PatternBackground size={36} fadeStopPct={60}>
  <main className="p-8">
    <h1 className="text-3xl">Hello — grid stronger in center</h1>
  </main>
</PatternBackground> */}
