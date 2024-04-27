"use client";
import { useState } from "react";

import Input from "@/components/input";
import Output from "@/components/output";

export default function URLDecoder(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    try {
      // Decode the value
      const decoded = decodeURIComponent(value);
      setValueOut(decoded);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid input.");
    }
  }

  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-4xl font-thin">URL Decoder</h1>
      <h2 className="text-md font-thin mb-8">Decode URL encoded strings.</h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Input multiline value={valueIn} setValue={handleSetValue} />

        <Output value={valueOut} />
      </div>
    </section>
  );
}
