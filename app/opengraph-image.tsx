import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const alt = `${siteConfig.name} portfolio and notebook`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f3f0e8",
        color: "#17211b",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 2 }}>
        ABDUL SAMAD
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          Computer science student.
        </div>
        <div style={{ color: "#526257", display: "flex", fontSize: 30 }}>
          Software, artificial intelligence, and careful questions.
        </div>
      </div>
      <div style={{ color: "#526257", display: "flex", fontSize: 24 }}>
        {siteConfig.url.replace(/^https?:\/\//, "")}
      </div>
    </div>,
    { ...size },
  );
}
