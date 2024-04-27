"use client";
import { Metadata } from "next";
import { useState } from "react";
import xmlFormat from "xml-formatter";

import Input from "@/components/input";
import Output from "@/components/output";

export const metadata: Metadata = {
  title: "XML Formatter | Developer Utilities",
};

export default function XMLFormatter(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    // Try to parse the value as XML
    try {
      // Format the XML
      const output = xmlFormat(value);

      setValueOut(output);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid XML");
    }
  }

  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-4xl font-thin">XML Formatter</h1>
      <h2 className="text-md font-thin mb-8">Format XML strings.</h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Input multiline value={valueIn} setValue={handleSetValue} />

        <Output value={valueOut} />
      </div>
    </section>
  );
}
