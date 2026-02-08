<script>
    import { Canvas } from "@threlte/core";
    import Scene from "../../components/966634ebf2fc135707d6753692bf4b1e/BackgroundEffect/Scene.svelte";
</script>

<svelte:head>
    <link
        rel="preload"
        href="/assets/images/966634ebf2fc135707d6753692bf4b1e/optimized/usa.webp"
        as="image"
        type="image/webp"
        crossorigin="anonymous"
    />
    <link
        rel="preload"
        href="/assets/images/966634ebf2fc135707d6753692bf4b1e/optimized/japan.webp"
        as="image"
        type="image/webp"
        crossorigin="anonymous"
    />
</svelte:head>

<div
    class="main-body min-h-screen overflow-y-auto bg-[url(/assets/images/966634ebf2fc135707d6753692bf4b1e/background.jpg)] bg-cover bg-center bg-no-repeat"
    data-server-ip="13.231.231.161"
    data-server-password="unhackablepass1234"
>
    <div class="fixed top-0 left-0 w-full h-screen z-10">
        <Canvas autoRender={false}>
            <Scene />
        </Canvas>
    </div>

    <div class="relative h-full w-full z-11"><slot /></div>
</div>
