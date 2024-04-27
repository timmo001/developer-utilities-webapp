"use client";
import { useState } from "react";
import { mdiCheck, mdiContentSave } from "@mdi/js";
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
    <div className="mt-4 text-lg text-gray-200 rounded bg-gray-800 p-4 flex items-center">
      <div className="flex-grow">{value}</div>
      <button
        className="ml-8 p-2 rounded text-gray-200 font-light bg-indigo-900 hover:bg-indigo-700"
        onClick={handleCopy}
      >
        <Icon
          title="Copy"
          size={0.8}
          path={isCopied ? mdiCheck : mdiContentSave}
        />
      </button>
    </div>
  );
}
