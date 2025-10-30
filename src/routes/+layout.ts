import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
    return {
        meta: {
            // 🔹 Title setup
            title: {
                default: "Abdulkhafizov07",
                template: "%s — Abdulkhafizov07",
            },

            // 🔹 General meta
            description:
                "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
            icon: "https://abdulkhafizov.uz/assets/favicon.ico",
            themeColor: "#000000",

            // 🔹 Favicons (optional — used by layout)
            favicons: {
                png: "https://abdulkhafizov.uz/assets/favicon.png",
                apple: "https://abdulkhafizov.uz/assets/apple-touch-icon.png",
                manifest: "https://abdulkhafizov.uz/site.webmanifest",
            },

            // 🔹 Open Graph (Facebook, Discord, LinkedIn, etc.)
            openGraph: {
                title: "Abdulkhafizov07",
                description:
                    "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
                image: "https://abdulkhafizov.uz/assets/social-preview.jpg",
                imageAlt:
                    "Preview of Abdulkhafizov07 personal developer portfolio",
                type: "website",
                url: "https://abdulkhafizov.uz",
                siteName: "Abdulkhafizov07",
                locale: "en_US",
            },

            // 🔹 Twitter (X)
            twitter: {
                card: "summary_large_image",
                creator: "@abdulkhafizov07",
                title: "Abdulkhafizov07",
                description:
                    "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
                image: "https://abdulkhafizov.uz/assets/social-preview.jpg",
                imageAlt:
                    "Preview of Abdulkhafizov07 personal developer portfolio",
            },

            // 🔹 Progressive Web App / Mobile info
            pwa: {
                title: "Abdulkhafizov07",
                statusBarStyle: "black-translucent",
            },

            // 🔹 Robots + author info
            robots: "index, follow",
            googlebot: "index, follow",
            author: "Abdulkhafizov07",
            copyright: "© 2025 Abdulkhafizov07",
            language: "en",
        },
    };
};
