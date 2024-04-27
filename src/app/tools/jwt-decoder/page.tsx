"use client";
import { Metadata } from "next";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import Input from "@/components/input";
import Output from "@/components/output";

export const metadata: Metadata = {
  title: "JWT Decoder | Developer Utilities",
};

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
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-4xl font-thin">JWT Decoder</h1>
      <h2 className="text-md font-thin mb-8">Decode JWT tokens.</h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Input multiline value={valueIn} setValue={handleSetValue} />

        <h3 className="w-full pt-4 text-lg text-left font-thin">Header</h3>
        <Output value={headerOut} />
        <h3 className="w-full pt-4 text-lg text-left font-thin">Body</h3>
        <Output value={bodyOut} />
      </div>
    </section>
  );
}
