"use client";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import Input from "@/components/shared/input";
import Output from "@/components/shared/output";

export default function JWTDecoder(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");
  const [headerOut, setHeaderOut] = useState<string>();
  const [bodyOut, setBodyOut] = useState<string>();

  function handleSetValue(value: string): void {
    setValueIn(value);

    // Try to parse the JWT
    try {
      // Parse the JWT
      const header = jwtDecode(value, { header: true });
      const body = jwtDecode(value);

      setHeaderOut(JSON.stringify(header, null, 2));
      setBodyOut(JSON.stringify(body, null, 2));
    } catch (error) {
      console.warn(error);
      setHeaderOut("Invalid JWT");
      setBodyOut(undefined);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />

      <h3 className="w-full pt-4 text-lg text-left font-thin">Header</h3>
      <Output type="json" value={headerOut} />
      <h3 className="w-full pt-4 text-lg text-left font-thin">Body</h3>
      <Output type="json" value={bodyOut} />
    </div>
  );
}
