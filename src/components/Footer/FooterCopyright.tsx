import { Copyright } from "@components/Copyright";
import { memo } from "react";

export const FooterCopyright = memo(() => {
  return (
    <div className="p-4 text-center ">
      <Copyright />
    </div>
  );
});
