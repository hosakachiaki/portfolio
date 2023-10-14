/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import { tw } from "@twind";
import { Article, findAllArticles, findProfile } from "./api/microcmsClient.ts";
import { Layout } from "./api/layout.tsx";
import { Hero } from "./api/hero.tsx";

export const handler: Handlers<Article[]> = {
  async GET(_, ctx) {
    const articles = await findAllArticles();
    const profiles = await findProfile();
    return ctx.render({ articles, profiles });
  },
};

export default function Page({ data }: PageProps<Article[]>) {

return (
  <Layout>
    <nav class={tw("sticky top-0 z-50")}>
      <ul
        class={tw(
          "flex flex-row justify-end w-max ml-auto mr-0 pt-4 pr-4 text-[#E97F8A] md:flex-col"
        )}
      >
        <li>
          <a href={`#works`} class={tw("flex items-center mr-2")}>
            <img src="/folder.svg" class={tw("h-8")}></img>WORKS
          </a>
        </li>
        <li>
          <a href={`#about`} class={tw("flex items-center mr-2")}>
            <img src="/face.svg" class={tw("h-8")}></img>ABOUT
          </a>
        </li>
        <li>
          <a href={`#contact`} class={tw("flex items-center")}>
            <img src="/mail.svg" class={tw("h-8")}></img>CONTACT
          </a>
        </li>
      </ul>
    </nav>
    <Hero></Hero>
    <div class={tw("max-w-screen-lg mx-auto mb-80 px-4")} id="works">
      {data.articles[0].map((article) => (
        <a href={`/works/${article.id}`}>
          <figure key={article.id} class={tw("mb-1")}>
            <img class={tw("mx-auto rounded-lg")} src={article.cover.url} />
          </figure>
          <h2 class={tw(
                "text-white text-right text-lg mb-8"
              )}>{article.title}</h2>
        </a>
      ))}
    </div>
    <div
      class={tw("bg-white px-4 py-16 mb-16 grid md:grid-cols-2 gap-16")}
      id="about"
    >
      <div class={tw("grid grid-cols-4 gap-2 mx-auto")}>
        <div
          class={tw(
            "col-span-5 grid grid-cols-3 gap-2 place-items-center md:col-span-1"
          )}
        >
          <figure class={tw("row-span-2 md:col-span-3")}>
            <img
              class={tw("mx-auto rounded-lg")}
              src={data.profiles[0].profileImage.url}
            />
          </figure>
          <div class={tw("row-span-2 md:col-span-3")}>
            <h2 class={tw("text-2xl")}>保坂 千晶</h2>
            <h3 class={tw("text-sm")}>HOSAKA CHIAKI</h3>
          </div>
        </div>
        <section class={tw("col-span-5 row-span-2 md:col-span-3")}>
          <pre class={tw("whitespace-pre-line mb-4 font-sans")}>
            {data.profiles[0].career}
          </pre>
          <pre class={tw("whitespace-pre-line font-sans")}>
            {data.profiles[0].about}
          </pre>
        </section>
      </div>
      <div class={tw("")} id="contact">
        <h2 class={tw("text-2xl flex mb-4")}>
          <img src="/mail.svg" class={tw("h-8")}></img>CONTACT
        </h2>
        <section>
          <p>
            営業目的のメール、圧縮ファイルが添付されているメール、またお名前や会社名のないメールには返信しておりません。
          </p>
          <h3>hosakachiaki@gmail.com</h3>
        </section>
      </div>
    </div>
  </Layout>
);
}


