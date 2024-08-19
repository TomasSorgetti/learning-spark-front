"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const savedLocale = localStorage.getItem("language");
    if (savedLocale && savedLocale !== locale) {
      const path = window.location.pathname.split("/")[2] || "";
      router.replace(`/${savedLocale}/${path}`);
    }
  }, [router, locale]);

  return <>{children}</>;
}
