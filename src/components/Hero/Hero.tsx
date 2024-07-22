import { memo } from "react";
import Image from "next/image";
export const Hero = memo(() => {
  return (
    <div>
      <h1 className="text-3 font-semibold mb-4 max-w-660">
        All about guitar loops and Music Theory
      </h1>
      <div className="h-20 w-20 flex">
        <Image
          src={`/assets/images/test.png`}
          width={116}
          height={116}
          alt="headshot of dean with a guitar"
          //   objectFit="cover"
        />
      </div>
    </div>
  );
});
