"use client";

export default function Input({
  multiline,
  value,
  setValue,
}: {
  multiline?: boolean;
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  return (
    <input
      className="mt-4 text-lg p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 hover:bg-slate-800 text-wrap"
      multiple={multiline}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
