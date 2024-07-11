import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@sass/global.scss";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const openSans = Open_Sans({ subsets: ["latin"] });

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "PIT",
  description: "PIT",
};

const RootLayout = async ({ children }: IProps) => {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/img/logo.webp" sizes="any" />
      </head>
      <body className={openSans.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
