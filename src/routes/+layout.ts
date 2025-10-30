import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: {
                default: "Abdulkhafizov07",
                template: "%s — Abdulkhafizov07",
            },
            icon: "https://abdulkhafizov.uz/assets/favicon.ico",
            description:
                "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
            openGraph: {
                title: "Abdulkhafizov07",
                image: "https://abdulkhafizov.uz/assets/social-preview.jpg",
                description:
                    "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
                type: "website",
                url: "https://abdulkhafizov.uz",
            },
            twitter: {
                card: "summary_large_image",
                creator: "@abdulkhafizov07",
                title: "Abdulkhafizov07",
                description:
                    "For you, all lives are created equal. That's why I came back to life. But you've finally come to realize it now, haven't you? Only one thing is equal for all, and that is death.",
                image: "https://abdulkhafizov.uz/assets/social-preview.jpg",
            },
        },
    };
};
