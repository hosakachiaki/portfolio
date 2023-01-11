/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer class={tw("mt-12 mb-0")}>
      <h6 class={tw("text-center")}>©︎ HOSAKA Chiaki</h6>
      <h6 class={tw("text-center")}>このサイトはdeno Freshを使用して制作しています。</h6>
    </footer>
  );
}
