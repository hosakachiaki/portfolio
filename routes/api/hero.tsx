/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";


export function Hero() {
  return (
    <div className="heroHeader">
      <div
        class={tw(
          "max-w-screen-lg mx-auto px-4 text-center relative py-48 text-white"
        )}
      >
        <h1 class={tw("")}>
          <img src="/logo.svg"></img>
        </h1>
      </div>
    </div>
  );
}
