"use client";
import { useState } from "react";

import Input from "@/components/shared/input";

export default function Base64ToBinary(): JSX.Element {
  const [valueIn, setValueIn] = useState<string>("");

  function handleSetValue(value: string): void {
    setValueIn(value);

    try {
      // Decode the base64 encoded string to a binary file
      const decoded = atob(value);

      // Create a blob from the binary file
      const blob = new Blob([decoded], { type: "application/octet-stream" });

      // Create a URL from the blob
      const url = URL.createObjectURL(blob);

      // Create a link element to download the file
      const link = document.createElement("a");
      link.href = url;
      link.download = "file";
      link.click();

      // Revoke the URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
      <Input multiline value={valueIn} setValue={handleSetValue} />
    </div>
  );
}
