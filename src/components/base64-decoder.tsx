"use client";
import { useState } from "react";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

export default function Base64Decoder(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    try {
      // Decode the base64 encoded string
      const decoded = atob(value);
      setValueOut(decoded);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid Base64");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <Output value={valueOut} />
    </div>
  );
}
