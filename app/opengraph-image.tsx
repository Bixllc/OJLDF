import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "One Jamaica Legal Defense Foundation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00843D 0%, #006930 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo circle placeholder */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "#FCD116",
            marginBottom: 32,
            fontSize: 72,
            fontWeight: 800,
            color: "#00843D",
          }}
        >
          OJ
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            One Jamaica
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#FCD116",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Legal Defense Foundation
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Fighting for justice and equality for all
        </div>
      </div>
    ),
    { ...size }
  );
}
