import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// Link-preview image for every page (Open Graph + Twitter).
export const alt = "Timothy Hales, geospatial educator, author, and innovator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/Timothy-Office.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#F6EFE3",
          padding: "0 72px",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#C2603C", letterSpacing: 2 }}>
            TIMOTHY HALES
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 54,
              fontWeight: 800,
              whiteSpace: "nowrap",
              color: "#25201A",
              lineHeight: 1.05,
              marginTop: 22,
              letterSpacing: -2,
            }}
          >
            <span>Geospatial educator.</span>
            <span>Children&apos;s author.</span>
            <span style={{ color: "#C2603C" }}>Curious innovator.</span>
          </div>
          <div style={{ fontSize: 28, color: "#5A5249", marginTop: 28 }}>
            Author of ABCs of GIS
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={420}
          height={420}
          style={{ borderRadius: 28, objectFit: "cover" }}
          alt=""
        />
      </div>
    ),
    size
  );
}
