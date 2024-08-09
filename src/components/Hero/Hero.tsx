import { memo } from "react";

export const Hero = memo(() => {
  return (
    <div className={`flex flex-col items-center text-center mb-12`}>
      <h2 className={`text-1.125 text-light`}>Blog</h2>
      <h1 className="text-3 font-semibold mb-4 max-w-660">
        All about guitar loops and Music Theory
      </h1>
    </div>
  );
});
