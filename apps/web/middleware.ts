import { NextRequest, NextResponse } from "next/server";

import { isLocale, type Locale } from "@/lib/i18n";

const localeCookie = "NEXT_LOCALE";

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && isLocale(saved)) return saved;

  const candidates = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((value) =>
        value.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number(qualityParameter.split("=")[1])
        : 1;
      return {
        locale: tag?.split("-")[0] ?? "",
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .filter((candidate) => isLocale(candidate.locale) && candidate.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  return (candidates[0]?.locale as Locale | undefined) ?? "it";
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${preferredLocale(request)}`, request.url),
      307,
    );
  }

  const locale = request.nextUrl.pathname.slice(1) as Locale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/", "/it", "/en"],
};
