import { memo } from "react";

export const Hamburger = memo(
  ({ onOpen, onToggle }: { onOpen: boolean; onToggle: () => void }) => {
    return (
      <div
        className={`flex flex-col justify-between w-8 h-8 cursor-pointer `}
        onClick={onToggle}
      >
        <div
          className={`h-1 w-full  transition-transform duration-300 transform rounded-full ${
            onOpen ? "translate-y-4 rotate-45 bg-dark z-50" : "bg-white"
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-white transition-opacity duration-300 rounded-full ${
            onOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-full transition-transform duration-300 transform rounded-full ${
            onOpen ? "-translate-y-3 -rotate-45 bg-dark z-50" : "bg-white"
          }`}
        ></div>
      </div>
    );
  }
);
