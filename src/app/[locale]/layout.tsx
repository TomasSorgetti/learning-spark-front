import Navbar from "@/components/layout/Navbar/Navbar";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { StoreProvider } from "@/providers/StoreProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Learning Spark",
  //TODO Complete description
  description: "Learning Spark description",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <StoreProvider>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <LocaleProvider>
              <Navbar />
              {children}
            </LocaleProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
