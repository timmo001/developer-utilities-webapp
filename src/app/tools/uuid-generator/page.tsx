"use client";
import Output from "@/components/output";
import Select from "@/components/select";
import { useMemo, useState } from "react";
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from "uuid";

enum UUIDVersion {
  V1 = 1,
  V3 = 3,
  V4 = 4,
  V5 = 5,
}

interface UUIDVersionItem {
  id: UUIDVersion;
  name: string;
}

type UUIDVersions = Array<UUIDVersionItem>;

const uuidVersions: UUIDVersions = [
  { id: UUIDVersion.V1, name: "Version 1" },
  { id: UUIDVersion.V3, name: "Version 3" },
  { id: UUIDVersion.V4, name: "Version 4" },
  { id: UUIDVersion.V5, name: "Version 5" },
];

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateUUID(version: UUIDVersion): string {
  switch (version) {
    case UUIDVersion.V1:
      return uuidv1();
    case UUIDVersion.V3:
      return uuidv3(generateRandomString(64), uuidv3.DNS);
    case UUIDVersion.V4:
      return uuidv4();
    case UUIDVersion.V5:
      return uuidv5(generateRandomString(64), uuidv5.DNS);
    default:
      return "Invalid UUID version";
  }
}

export default function UUIDGenerator(): JSX.Element {
  const [value, setValue] = useState<string>();

  const [uuidVersion, setUUIDVersion] = useState<UUIDVersionItem>(
    uuidVersions[2]
  );

  return (
    <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
      <h1 className="text-2xl font-thin">UUID Generator</h1>
      <h2 className="text-md font-thin mb-8">
        Generate a UUID (Universally Unique Identifier) using the selected
        version.
      </h2>

      <div className="flex flex-col items-center justify-center w-full p-8 rounded-lg">
        <Select
          items={uuidVersions}
          value={uuidVersion}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setUUIDVersion(
              uuidVersions.find(
                (version) => version.id === parseInt(event.target.value)
              ) || uuidVersions[2]
            );
            setValue(undefined);
          }}
        />

        <button
          onClick={() => setValue(generateUUID(uuidVersion.id))}
          className="min-w-80 mt-2 px-6 py-3 rounded transition-colors duration-300 bg-indigo-900 hover:bg-indigo-700"
        >
          Generate
        </button>

        <Output value={value} />
      </div>
    </section>
  );
}
