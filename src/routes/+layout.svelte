<script lang="ts">
    import "./layout.css";
    import { _metadata } from "./+layout";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <title>{_metadata.title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<slot />
