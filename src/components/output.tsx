"use client";
import { useMemo, useState } from "react";
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

  const invalidValue = useMemo<boolean>(
    () => value?.toLowerCase().startsWith("invalid"),
    [value]
  );

  return (
    <button
      className={`mt-4 text-lg p-4 text-gray-200 w-full flex items-center rounded transition-colors duration-300 bg-slate-900 ${
        invalidValue ? "bg-amber-700" : "hover:bg-slate-800"
      }`}
      disabled={invalidValue}
      onClick={handleCopy}
    >
      <pre
        className={`flex-grow text-wrap break-words ${
          invalidValue ? "text-center" : "text-justify"
        }`}
      >
        <code>{value}</code>
      </pre>
      {!invalidValue && (
        <span className={`ml-4 ${isCopied && "text-green-500"}`}>
          <Icon
            title="Copy"
            size={0.8}
            path={isCopied ? mdiCheck : mdiContentCopy}
          />
        </span>
      )}
    </button>
  );
}
