<script lang="ts">
    import "../app.css";
    export let data;
    const meta = data.meta;
</script>

<svelte:head>
    <!-- Basic SEO -->
    <title>{meta.title?.default}</title>
    <meta name="title" content={meta.title?.default} />
    <meta name="description" content={meta.description} />
    <link rel="canonical" href={meta.openGraph?.url} />

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href={meta.icon || "/favicon.ico"} />
    <link
        rel="icon"
        type="image/png"
        href={meta.favicons?.png || "/favicon.png"}
    />
    <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={meta.favicons?.apple || "/apple-touch-icon.png"}
    />
    <link
        rel="manifest"
        href={meta.favicons?.manifest || "/site.webmanifest"}
    />
    <meta name="theme-color" content={meta.themeColor || "#000000"} />

    <!-- Open Graph / Facebook / LinkedIn / Discord -->
    <meta property="og:type" content={meta.openGraph?.type} />
    <meta property="og:url" content={meta.openGraph?.url} />
    <meta property="og:title" content={meta.openGraph?.title} />
    <meta property="og:description" content={meta.openGraph?.description} />
    <meta property="og:image" content={meta.openGraph?.image} />
    <meta property="og:image:alt" content={meta.openGraph?.imageAlt} />
    <meta property="og:site_name" content={meta.openGraph?.siteName} />
    <meta property="og:locale" content={meta.openGraph?.locale || "en_US"} />

    <!-- Twitter -->
    <meta name="twitter:card" content={meta.twitter?.card} />
    <meta name="twitter:creator" content={meta.twitter?.creator} />
    <meta name="twitter:title" content={meta.twitter?.title} />
    <meta name="twitter:description" content={meta.twitter?.description} />
    <meta name="twitter:image" content={meta.twitter?.image} />
    <meta name="twitter:image:alt" content={meta.twitter?.imageAlt} />

    <!-- Mobile / PWA -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
        name="apple-mobile-web-app-status-bar-style"
        content={meta.pwa?.statusBarStyle || "black-translucent"}
    />
    <meta
        name="apple-mobile-web-app-title"
        content={meta.pwa?.title || meta.title?.default}
    />

    <!-- Robots / SEO directives -->
    <meta name="robots" content={meta.robots || "index, follow"} />
    <meta name="googlebot" content={meta.googlebot || "index, follow"} />
    <meta name="author" content={meta.author || "Abdulkhafizov07"} />
    <meta
        name="copyright"
        content={meta.copyright || "© 2025 Abdulkhafizov07"}
    />
    <meta name="language" content={meta.language || "en"} />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
    />

    <style>
        :root {
            --loader-color: rgb(0, 0, 0);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --loader-color: rgb(255, 255, 255);
            }
        }

        .loader {
            width: 64px;
            aspect-ratio: 1;
            display: grid;
            border-radius: 50%;
            background:
                linear-gradient(
                        0deg,
                        var(--loader-color) 30%,
                        rgba(0, 0, 0, 0) 0 70%,
                        var(--loader-color) 0
                    )
                    50% / 8% 100%,
                linear-gradient(
                        90deg,
                        var(--loader-color) 30%,
                        rgba(0, 0, 0, 0) 0 70%,
                        var(--loader-color) 0
                    )
                    50% / 100% 8%;
            background-repeat: no-repeat;
            animation: l23 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .loader::before,
        .loader::after {
            content: "";
            grid-area: 1/1;
            border-radius: 50%;
            background: inherit;
            transform: rotate(30deg);
        }
        .loader::after {
            transform: rotate(60deg);
        }
        @keyframes l23 {
            100% {
                transform: rotate(1turn);
            }
        }
    </style>
</svelte:head>

<div
    id="main-loader"
    class="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white dark:bg-black z-99"
>
    <div class="loader dark:dark"></div>
</div>

<div id="page">
    <div
        class="flex w-full h-screen items-center justify-center bg-white dark:bg-black overflow-hidden"
        id="background"
    >
        <video
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            class="w-full h-full object-cover opacity-60"
        >
            <source src="/assets/background.webm" type="video/mp4" />
            <track kind="captions" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div
        class="fixed top-0 left-0 w-full max-h-screen overflow-y-auto py-12 z-10"
    >
        <div id="container" class="mx-auto p-4">
            <slot />
        </div>
    </div>
</div>
