"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function LanguageSwitcher() {
    const changeLocale = useChangeLocale();
    const locale = useCurrentLocale();

    return (
        <section className="space-y-6">
            <p>Current locale: {locale}</p>
            <div className="flex gap-4">
                <button
                    onClick={() => changeLocale("en")}
                    className="bg-black text-white px-5 py-1.5 rounded shadow"
                >
                    English
                </button>
                <button
                    onClick={() => changeLocale("fr")}
                    className="bg-black text-white px-5 py-1.5 rounded shadow"
                >
                    French
                </button>
            </div>
        </section>
    );
}
