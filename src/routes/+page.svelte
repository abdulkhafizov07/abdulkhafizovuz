<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const LEAF_COUNT = 20;
        const container = document.getElementById("leaf-container");
        if (!container) return;

        function random(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        function createLeaf() {
            const leaf = document.createElement("img");
            leaf.src = "/assets/green-tea-leaf.png";
            leaf.className =
                "leaf absolute w-12 opacity-80 pointer-events-none";

            leaf.style.top = "-100px";
            leaf.style.left = `${random(0, window.innerWidth - 50)}px`;
            leaf.style.animationDuration = `${random(8, 16)}s`;
            leaf.style.animationDelay = `${random(0, 5)}s`;
            leaf.style.transform = `rotate(${random(-40, 40)}deg) scale(${random(0.8, 1.4)})`;

            container.appendChild(leaf);
        }

        for (let i = 0; i < LEAF_COUNT; i++) {
            createLeaf();
        }
    });
</script>

<section id="hero">
    <div
        id="leaf-container"
        class="w-full h-screen relative bg-green-950 overflow-hidden"
    ></div>
</section>

<style>
    @keyframes fall {
        0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translateY(50vh) translateX(40px) rotate(180deg);
            opacity: 0.9;
        }
        100% {
            transform: translateY(100vh) translateX(-40px) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes fallLeft {
        0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) translateX(-60px) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes fallRight {
        0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) translateX(60px) rotate(360deg);
            opacity: 0;
        }
    }

    :global(.leaf) {
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        will-change: transform, opacity;
    }
</style>
