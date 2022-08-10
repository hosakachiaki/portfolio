/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { Article, findArticleById } from "../api/microcmsClient.ts";
import { Layout } from "../api/layout.tsx";
import { Header } from "../api/header.tsx";
import { tw } from "@twind";

export const handler: Handlers<Article | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    const article = await findArticleById(id);

    // 記事が取得できなかった場合は null を渡す
    if (!article) {
      return ctx.render(null);
    }

    // 記事が取得できた場合は取得した記事を渡す
    return ctx.render(article);
  },
};

export default function ArticlePage({ data }: PageProps<Article>) {
  const skill = data.skill;
  const { article, parseContent } = data;
  return (
    <Layout>
      <Header></Header>
      <div class={tw("max-w-screen-lg mx-auto px-4")}>
        <figure class={tw("mt-8")}>
          <img class={tw("mx-auto")} src={data.cover.url} />
        </figure>
        <ul
          class={tw(
            "w-full flex flex-wrap justify-end mt-2 md:mt-0 ml-auto mr-0 mb-4"
          )}
        >
          {data.skill.map((i) => (
            <li
              class={tw(
                "bg-white text-xs text-[#A0D8EA] px-2 py-1 mt-1 md:mt-0 mr-1 rounded-t-full rounded-b-full md:rounded-t-none md:rounded-b-md last:mr-0 "
              )}
            >
              {i}
            </li>
          ))}
        </ul>
        <h2 class={tw("text-xl mb-1")}>
          <a href={data.url}>{data.title}</a>
        </h2>
        <h3>
          <a href={data.url} class={tw("text-[#E97F8A]")}>
            {data.url}
          </a>
        </h3>

        <div class={tw("my-12 grid gap-4 md:grid-cols-4")}>
          <section class={tw("max-w-[40em]")}>
            <h3 class={tw("font-bold")}>OUTLINE</h3>
            <pre class={tw("whitespace-pre-line font-sans")}>
              {data.caption}
            </pre>
          </section>
          {data.spImage_1 && (
            <figure>
              <img src={data.spImage_1.url} />
            </figure>
          )}
          {data.spImage_2 && (
            <figure>
              <img src={data.spImage_2.url} />
            </figure>
          )}
          {data.spImage_3 && (
            <figure>
              <img src={data.spImage_3.url} />
            </figure>
          )}
        </div>
        {data.pcImage && (
          <figure>
            <img src={data.pcImage.url} />
          </figure>
        )}
        {data.bannerImage && (
          <figure class={tw("my-4")}>
            <img src={data.bannerImage.url} />
          </figure>
        )}
      </div>
    </Layout>
  );
}
