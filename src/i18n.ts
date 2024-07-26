import { match } from "@formatjs/intl-localematcher";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { DEFAULT_LANGUAGE, LANGUAGES } from "@/data";

export default getRequestConfig(async function () {
  const cookiesLocale = cookies().get("NEXT_LOCALE")?.value || "km";
  const locale = match(LANGUAGES, [cookiesLocale], DEFAULT_LANGUAGE);
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
