<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { _metadata } from "./+layout";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{_metadata.title}</title>
</svelte:head>

<div
    class="fixed bottom-4 left-4 right-4 bg-black border-2 border-gray-400 p-4 text-white rounded-xl"
>
    <p>Under development. Please, check out next time</p>
</div>

<div class="w-full h-screen bg-black"><slot /></div>
