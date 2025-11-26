"use client";

import { useEffect } from "react";

export default function ChatbaseWidget() {
  useEffect(() => {
    if (document.getElementById("l5G3pbIosppeod7-Gfyz-")) return;

    (function () {
      if (
        // @ts-ignore
        !window.chatbase ||
        // @ts-ignore
        window.chatbase("getState") !== "initialized"
      ) {
        // @ts-ignore
        window.chatbase = (...args: any[]) => {
          // @ts-ignore
          (window.chatbase.q = window.chatbase.q || []).push(args);
        };

        // PROXY FIX
        // @ts-ignore
        window.chatbase = new Proxy(window.chatbase as any, {
          get(target: any, prop: string) {
            if (prop === "q") return target.q;
            return (...args: any[]) => target(prop, ...args);
          },
        });
      }

      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "l5G3pbIosppeod7-Gfyz-";
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad);
    })();
  }, []);

  return null;
}
