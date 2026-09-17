import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

import { socialImageSize } from "@/lib/discovery";
import { dictionaries, isLocale } from "@/lib/i18n";

export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const locale = requestedLocale;
  const copy = dictionaries[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#11100e",
          color: "#f4f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: "0.08em" }}>
          {copy.identity.firstName} {copy.identity.lastName}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            {copy.hero.role}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#b8b2a7" }}>
            {copy.metadata.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
