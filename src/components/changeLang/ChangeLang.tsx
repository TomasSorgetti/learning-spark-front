"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { ChangeEvent } from "react";
export default function ChangeLang() {
  const router = useRouter();
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("language", e.target.value);
    const lang = e.target.value;
    const path = window.location.pathname.split("/")[2]
      ? window.location.pathname.split("/")[2]
      : "";
    startTransition(() => router.replace(`/${lang}/${path}`));
  };

  return (
    <label>
      <p>Change Language</p>
      <select
        defaultValue={localActive}
        disabled={isPending}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </label>
  );
}
