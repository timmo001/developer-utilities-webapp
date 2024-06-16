import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          background: "#020617",
        }}
      >
        <div tw="flex w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex-row">
          <div tw="flex flex-col items-center justify-center w-full p-8">
            <h1 tw="text-4xl font-bold">Developer Utilities</h1>
            <p tw="mt-4 text-lg text-gray-600">
              A collection of utilities for developers.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
