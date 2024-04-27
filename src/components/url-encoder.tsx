"use client";
import { useState } from "react";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

export default function URLEncoder(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    try {
      // Encode the value
      const encoded = encodeURIComponent(value);
      setValueOut(encoded);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid input.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <Output value={valueOut} />
    </div>
  );
}
