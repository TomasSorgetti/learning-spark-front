
import Posts from "@/components/posts/Posts";
import { useTranslations } from "next-intl";


export default function BlogPage() {
  const t = useTranslations("BlogPage");
  
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Posts />
    </main>
  );
}
