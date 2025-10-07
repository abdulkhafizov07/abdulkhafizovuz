import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
  return {
    meta: {
      title: {
        default: "Abdulkhafizov07 — Developer",
        template: "%s — Abdulkhafizov07",
      },
      description: "Middle-junior developer crafting modern web apps ⚡",
      openGraph: {
        title: "Abdulkhafizov07 — Web Developer",
        image: "https://abdulkhafizov.uz/assets/social-preview.png",
        description: "Middle-junior developer crafting modern web apps ⚡",
        type: "website",
        url: "https://abdulkhafizov.uz",
      },
      twitter: {
        card: "summary_large_image",
        creator: "@abdulkhafizov07",
        title: "Abdulkhafizov07 — Web Developer",
        description: "Middle-junior developer crafting modern web apps ⚡",
        image: "https://abdulkhafizov.uz/assets/social-preview.png",
      },
    },
  };
};
