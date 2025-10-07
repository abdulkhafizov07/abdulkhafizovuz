<script lang="ts">
    import "../app.css";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title.default}</title>
    <meta name="description" content={data.meta.description} />

    <!-- Open Graph -->
    <meta property="og:title" content={data.meta.openGraph.title} />
    <meta property="og:description" content={data.meta.openGraph.description} />
    <meta property="og:image" content={data.meta.openGraph.image} />
    <meta property="og:type" content={data.meta.openGraph.type} />
    <meta property="og:url" content={data.meta.openGraph.url} />

    <!-- Twitter -->
    <meta name="twitter:card" content={data.meta.twitter.card} />
    <meta name="twitter:creator" content={data.meta.twitter.creator} />
    <meta name="twitter:title" content={data.meta.twitter.title} />
    <meta name="twitter:description" content={data.meta.twitter.description} />
    <meta name="twitter:image" content={data.meta.twitter.image} />
</svelte:head>

<slot />
