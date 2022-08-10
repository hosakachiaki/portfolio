/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Footer } from "./footer.tsx";
import { tw } from "@twind";


export function Layout({ children }:PageProps) {
    return (
      <div
        className="wrapper"
        class={tw(
          "bg-[#A0D8EA] text-base leading-loose text-[#6A747D] min-h-screen"
        )}
      >
        {children}
        <Footer></Footer>
      </div>
    );
}