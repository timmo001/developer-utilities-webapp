"use client";
import { useState } from "react";
import xmlFormat from "xml-formatter";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

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
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <Output value={valueOut} />
    </div>
  );
}
