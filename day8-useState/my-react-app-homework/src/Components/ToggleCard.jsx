import { useState } from "react";

const ToggleCard = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        padding: "30px",
        textAlign: "center",
        border: "1px solid gray",
        margin: "20px"
      }}
    >
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={toggleMode}>
        {isDark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
};

export default ToggleCard;