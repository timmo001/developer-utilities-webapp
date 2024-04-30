"use client";
import { useState } from "react";
import { mdiCheck, mdiContentPaste, mdiFileOutline } from "@mdi/js";
import Icon from "@mdi/react";

let timeout: NodeJS.Timeout;
export default function Input({
  multiline,
  value,
  setValue,
}: {
  multiline?: boolean;
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  const [isPasted, setIsPasted] = useState<boolean>(false);

  function handleUpload(): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "*.*";
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setValue(e.target?.result as string);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  }

  function handlePaste(): void {
    setIsPasted(false);
    navigator.clipboard.readText().then((text) => {
      setValue(text);
      setIsPasted(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setIsPasted(false), 1500);
    });
  }

  return (
    <div
      className={`relative mt-4 text-md text-gray-200 w-full flex items-center rounded transition-colors duration-300 bg-slate-900`}
    >
      {multiline ? (
        <textarea
          className="text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 text-wrap break-words"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows={8}
        />
      ) : (
        <input
          className="text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}{" "}
      <button
        className="absolute top-4 right-16 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
        onClick={handleUpload}
      >
        <Icon title="Upload" size={0.8} path={mdiFileOutline} />
      </button>
      <button
        className={`absolute top-4 right-4 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700 ${
          isPasted && "text-green-500"
        }`}
        onClick={handlePaste}
      >
        <Icon
          title="Paste"
          size={0.8}
          path={isPasted ? mdiCheck : mdiContentPaste}
        />
      </button>
    </div>
  );
}
