import { getI18n } from "@/locales/server";
import LanguageSwitcher from "./components/language-switcher";
import dynamic from "next/dynamic";

const EditorComp = dynamic(() => import("./components/mdx-editor"), {
    ssr: false,
});

export default async function Home() {
    const t = await getI18n();

    return (
        <section className="p-4">
            <div className="text-xl">{t("hello.world")}</div>
            <LanguageSwitcher />
            <section className="mt-8">
                <EditorComp markdown="# Hello World" />
            </section>
        </section>
    );
}
