import { forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      className="h-12 w-80 rounded bg-white outline-none pl-4 text-dark placeholder-dark placeholder-opacity-50 border border-dark focus:border-primary focus:placeholder-opacity-75 focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      ref={ref}
      {...props}
    />
  );
});
