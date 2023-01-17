import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/Inter-SemiBold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const [fontData] = await Promise.all([font]);
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Gear";
    const description = searchParams.has("description")
      ? searchParams.get("description")?.slice(0, 100)
      : "gear.alexcarpenter.me";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#f1f3f5",
            height: "100%",
            width: "100%",
            padding: 48,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#FF4F00",
              borderRadius: "9999px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontStyle: "normal",
                color: "#11181c",
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 32,
                color: "#687076",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
