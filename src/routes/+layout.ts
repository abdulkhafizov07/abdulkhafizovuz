import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
  return {
    meta: {
      title: "Abdulkhafizov07 — Developer",
      description: "Middle-junior developer crafting modern web apps ⚡",
      openGraph: {
        title: "Abdulkhafizov07 — Web Developer",
        image: "https://abdulkhafizov.uz/assets/social-preview.png",
        description: "Middle-junior developer crafting modern web apps ⚡",
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
