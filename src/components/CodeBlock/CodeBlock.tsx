// components/CodeBlock.tsx
import React from "react";

interface CodeBlockProps {
  children: string;
  caption?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, caption }) => {
  return (
    <div className={`w-full md:max-w-660 mb-6`}>
      <pre className="bg-gray-900  p-4 rounded-md overflow-auto mb-2">
        <code>{children}</code>
      </pre>
      <p className="text-0.875">{caption}</p>
    </div>
  );
};
