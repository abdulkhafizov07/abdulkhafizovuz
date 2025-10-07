<script lang="ts">
    import "../app.css";
    import { metadata } from "./+layout";

    let { children } = $props();
</script>

<svelte:head>
    <title>{metadata.title.default}</title>
    <meta name="description" content={metadata.description} />

    <!-- Open Graph -->
    <meta property="og:title" content={metadata.openGraph.title} />
    <meta property="og:description" content={metadata.openGraph.description} />
    <meta property="og:image" content={metadata.openGraph.images[0]} />
    <meta property="og:type" content={metadata.openGraph.type} />
    <meta property="og:url" content={metadata.openGraph.url} />

    <!-- Twitter -->
    <meta name="twitter:card" content={metadata.twitter.card} />
    <meta name="twitter:creator" content={metadata.twitter.creator} />
    <meta name="twitter:title" content={metadata.twitter.title} />
    <meta name="twitter:description" content={metadata.twitter.description} />
    <meta name="twitter:image" content={metadata.twitter.images[0]} />
</svelte:head>

{@render children?.()}
