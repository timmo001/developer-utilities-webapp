"use client";
import { useMemo, useState } from "react";
import { mdiCheck, mdiContentCopy, mdiContentSaveOutline } from "@mdi/js";
import Icon from "@mdi/react";

let timeout: NodeJS.Timeout;
export default function Output({
  type,
  value,
}: {
  type?: string;
  value?: string;
}): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    setIsCopied(false);
    navigator.clipboard.writeText(value!!);
    setIsCopied(true);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => setIsCopied(false), 1500);
  }

  function handleSave(): void {
    const data = new Blob([value!!], { type: "text/plain" });
    const url = URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = `output.${type || "txt"}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const invalidValue = useMemo<boolean>(
    () => value?.toLowerCase().startsWith("invalid") || false,
    [value]
  );

  if (!value) return <></>;

  return (
    <div
      className={`mt-4 text-md p-4 text-gray-200 w-full flex items-center rounded transition-colors duration-300 bg-slate-900`}
    >
      <pre
        className={`flex-grow text-wrap break-words ${
          invalidValue ? "text-center" : "text-justify"
        }`}
      >
        <code className="break-all">{value}</code>
      </pre>
      {!invalidValue && (
        <span className={`flex flex-row ml-4 `}>
          <button
            className="mr-4 p-2 items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
            onClick={handleSave}
          >
            <Icon title="Save" size={0.8} path={mdiContentSaveOutline} />
          </button>
          <button
            className={`p-2 items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700 ${
              isCopied && "text-green-500"
            }`}
            onClick={handleCopy}
            disabled={invalidValue}
          >
            <Icon
              title="Copy"
              size={0.8}
              path={isCopied ? mdiCheck : mdiContentCopy}
            />
          </button>
        </span>
      )}
    </div>
  );
}
