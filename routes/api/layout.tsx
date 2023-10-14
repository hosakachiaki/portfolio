/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Footer } from "./footer.tsx";
import { tw } from "@twind";
import { Head } from "$fresh/src/runtime/head.ts";


export function Layout({ children }:PageProps) {
    return (
      <div
        className="wrapper"
        class={tw(
          "bg-[#A0D8EA] text-base leading-loose text-[#6A747D] min-h-screen"
        )}
      >
        <Head>
          <title>HOSAKA CHIAKI | Portfolio Web Site</title>
            <meta name="robots" content="noindex">
        </Head>
        {children}
        <Footer></Footer>
      </div>
    );
}
