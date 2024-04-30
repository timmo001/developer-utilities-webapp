"use client";
import { mdiContentPaste, mdiFile } from "@mdi/js";
import Icon from "@mdi/react";

export default function Input({
  multiline,
  value,
  setValue,
}: {
  multiline?: boolean;
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
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
    navigator.clipboard.readText().then((text) => {
      setValue(text);
    });
  }

  if (multiline)
    return (
      <div className="relative mt-4 w-full">
        <textarea
          className="text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 text-wrap break-words"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows={8}
        />
        <button
          className="absolute top-4 right-16 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
          onClick={handleUpload}
        >
          <Icon title="Upload" size={0.8} path={mdiFile} />
        </button>
        <button
          className="absolute top-4 right-4 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
          onClick={handlePaste}
        >
          <Icon title="Paste" size={0.8} path={mdiContentPaste} />
        </button>
      </div>
    );

  return (
    <div className="relative mt-4 w-full">
      <input
        className="text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="absolute top-4 right-16 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
        onClick={handleUpload}
      >
        <Icon title="Upload" size={0.8} path={mdiFile} />
      </button>
      <button
        className="absolute top-4 right-4 p-2 flex items-center rounded transition-colors duration-300 bg-slate-800 hover:bg-slate-700"
        onClick={handlePaste}
      >
        <Icon title="Paste" size={0.8} path={mdiContentPaste} />
      </button>
    </div>
  );
}
