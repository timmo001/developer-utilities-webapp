"use client";
import { useState } from "react";
import { mkConfig, generateCsv, asString } from "export-to-csv";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

const csvConfig = mkConfig({
  useKeysAsHeaders: true,
  replaceUndefinedWith: "",
});

function stringifyArraysAndObjects(
  obj: Record<string, unknown>
): Record<string, unknown> {
  const newObj = { ...obj };

  Object.keys(newObj).forEach((key) => {
    if (Array.isArray(newObj[key])) {
      newObj[key] = JSON.stringify(newObj[key]);
    } else if (typeof newObj[key] === "object") {
      newObj[key] = JSON.stringify(newObj[key]);
    }
  });

  return newObj;
}

export default function JSONToCSV(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    // Try to parse the value as JSON
    try {
      const parsed = JSON.parse(value);

      // Stringify any unsupported types from the parsed JSON's object keys (Array, Object)
      // This is necessary because the CSV format only supports simple types
      if (Array.isArray(parsed)) {
        parsed.forEach((item, index) => {
          if (typeof item === "object") {
            parsed[index] = stringifyArraysAndObjects(item);
          }
        });
      } else if (typeof parsed === "object") {
        Object.keys(parsed).forEach((key) => {
          if (Array.isArray(parsed[key]) || typeof parsed[key] === "object") {
            parsed[key] = stringifyArraysAndObjects(parsed[key]);
          }
        });
      }

      console.log({ parsed });

      // Convert the parsed JSON to CSV
      const csvOutput = generateCsv(csvConfig)(parsed);
      const output = `${asString(csvOutput)}\n`;

      setValueOut(output);
    } catch (error) {
      console.warn(error);
      setValueOut("Invalid JSON");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <Output type="json" value={valueOut} />
    </div>
  );
}
