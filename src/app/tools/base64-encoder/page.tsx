"use client";
import { useState } from "react";

import Input from "@/components/input";
import Output from "@/components/output";

// TODO: URL safe Base64 encoding (base64url)
export default function Base64Encoder(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    try {
      // Encode the value to Base64
      const encoded = btoa(value);
      setValueOut(encoded);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid Base64 input");
    }
  }

  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-2xl font-thin">Base64 Encoder</h1>
      <h2 className="text-md font-thin mb-8">Encode Base64 encoded strings.</h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Input multiline value={valueIn} setValue={handleSetValue} />

        <Output value={valueOut} />
      </div>
    </section>
  );
}
