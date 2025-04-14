import React, { useEffect } from "react";
import { FaRegCircle } from "react-icons/fa"; // Car wheel icon from React Icons
import ReactDOM from "react-dom";

const CustomCursor = () => {
  useEffect(() => {
    // Create a custom cursor element
    const cursorElement = document.createElement("div");
    cursorElement.id = "custom-cursor";
    cursorElement.style.position = "absolute";
    cursorElement.style.width = "32px";
    cursorElement.style.height = "32px";
    cursorElement.style.pointerEvents = "none";
    cursorElement.style.zIndex = "9999";
    cursorElement.style.display = "flex"; // Ensures proper alignment for icon
    cursorElement.style.alignItems = "center";
    cursorElement.style.justifyContent = "center";

    // Style the cursor element explicitly to avoid background issues
    cursorElement.style.background = "transparent"; // Fixes white background issue

    // Add the car wheel icon inside the cursor element
    ReactDOM.render(<FaRegCircle size={32} color="white" />, cursorElement);
    document.body.appendChild(cursorElement);

    // Update cursor position dynamically
    const handleMouseMove = (e) => {
      cursorElement.style.left = `${e.pageX}px`;
      cursorElement.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove the cursor element when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursorElement);
    };
  }, []);

  return null; // No visual output, as this is a utility component
};

export default CustomCursor;