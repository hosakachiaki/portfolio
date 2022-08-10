/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
    return (
        <header>
            <a href={`/`}>
                <img src="/arrow_forward.svg" class={tw("h-16")}></img>
            </a>
      </header>
    );
}
