<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { _metadata } from "./+layout";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{_metadata.title}</title>
</svelte:head>

<div class="w-full h-screen bg-black"><slot /></div>
