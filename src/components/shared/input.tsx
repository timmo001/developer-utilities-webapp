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
  if (multiline)
    return (
      <textarea
        className="mt-4 text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 hover:bg-slate-800 text-wrap break-words"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        rows={12}
      />
    );

  return (
    <input
      className="mt-4 text-md p-4 w-full text-gray-200 flex items-center rounded transition-colors duration-300 bg-slate-900 hover:bg-slate-800"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
