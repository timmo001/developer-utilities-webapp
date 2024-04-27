"use client";
import { useState } from "react";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

export default function JSONFormatter(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    // Try to parse the value as JSON
    try {
      const parsed = JSON.parse(value);

      // Format the JSON
      const output = JSON.stringify(parsed, null, 2);

      setValueOut(output);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid JSON");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <Output value={valueOut} />
    </div>
  );
}
