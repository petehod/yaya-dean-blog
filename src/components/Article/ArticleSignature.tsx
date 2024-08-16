"use client";
import { useEffect, useState } from "react";
import { exquisiteWords } from "@data/squisite.data";
import { randomIndex } from "@utils/randomIndex.utils";

const useExquisite = () => {
  const [exquisite, setExquisite] = useState<string | null>(null);

  useEffect(() => {
    const randomWord = exquisiteWords[randomIndex(exquisiteWords.length)];
    setExquisite(randomWord);
  }, []);

  return exquisite;
};

const style = "text-1.125 font-semibold mb-2";

export const ArticleSignature = () => {
  const exquisite = useExquisite();

  const includeN = (word: string): string => {
    if (!word) return "";
    const vowels = ["a", "e", "i", "o", "u"];
    const firstLetter = word.charAt(0).toLowerCase();
    return vowels.includes(firstLetter) ? "n" : "";
  };

  return (
    <div className="flex-col w-full text-center md:text-end md:pr-24 mt-8">
      {exquisite && (
        <p className={style}>
          Have a{includeN(exquisite)} {exquisite}quisite day 🦍
        </p>
      )}
      <p className={style}>~dean</p>
    </div>
  );
};
