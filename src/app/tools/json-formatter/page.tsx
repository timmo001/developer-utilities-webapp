"use client";
import { Metadata } from "next";
import { useState } from "react";

import Input from "@/components/input";
import Output from "@/components/output";

export const metadata: Metadata = {
  title: "JSON Formatter | Developer Utilities",
};

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
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-4xl font-thin">JSON Formatter</h1>
      <h2 className="text-md font-thin mb-8">Format JSON strings.</h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Input multiline value={valueIn} setValue={handleSetValue} />

        <Output value={valueOut} />
      </div>
    </section>
  );
}
