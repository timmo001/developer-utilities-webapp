"use client";
import { useState } from "react";
import { mdiCheck, mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";

let timeout: NodeJS.Timeout;
export default function Output({ value }: { value?: string }): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(false);
    navigator.clipboard.writeText(value!!);
    setIsCopied(true);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => setIsCopied(false), 1500);
  };

  if (!value) return <></>;

  return (
    <button
      className="mt-4 text-lg p-4 text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 hover:bg-slate-800"
      onClick={handleCopy}
    >
      <div className="flex-grow">{value}</div>
      <span className="ml-4">
        <Icon
          title="Copy"
          size={0.8}
          path={isCopied ? mdiCheck : mdiContentCopy}
        />
      </span>
    </button>
  );
}
