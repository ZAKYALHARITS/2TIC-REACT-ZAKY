import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Haii keke</h1>
      {/* Animasi Love Langsung di Sini */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "32px 0" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="100px" height="100px" style={{ animation: "pulse 1.5s infinite" }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {/* Kata-kata I love you */}
        <div
          style={{
            marginTop: "16px",
            fontSize: "2rem",
            color: "#e63946",
            fontWeight: "bold",
            textShadow: "1px 1px 4px #fff",
          }}
        >
          I love you ❤️
        </div>
        {/* Animasi CSS */}
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </>
  );
}

export default App;
