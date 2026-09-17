import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { dictionaries, isLocale, locales, type Locale } from "@/lib/i18n";
import styles from "@/components/portfolio/portfolio-shell.module.css";

type PageProps = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = dictionaries[locale];
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { "it-IT": "/it", "en-US": "/en" },
    },
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];

  return (
    <main className={styles.shell}>
      <Header locale={locale} copy={copy} />
      <Hero copy={copy.hero} identity={copy.identity} />
    </main>
  );
}
