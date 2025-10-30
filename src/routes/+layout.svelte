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
</svelte:head>

<slot />
