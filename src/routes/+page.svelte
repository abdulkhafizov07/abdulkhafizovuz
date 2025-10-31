<script lang="ts">
    import { onMount } from "svelte";
    import Profile from "../lib/Profile.svelte";
    import Location from "../lib/Location.svelte";
    import Progres from "../lib/Progres.svelte";

    let audio: HTMLAudioElement;

    onMount(() => {
        const mainLoader = document.getElementById("main-loader");

        setTimeout(() => {
            if (mainLoader) {
                mainLoader.style.opacity = "0";
                mainLoader.style.visibility = "hidden";
            }
        }, 100);

        // setTimeout(() => {
        //     if (audio) {
        //         audio
        //             .play()
        //             .catch((err) =>
        //                 console.log("Audio autoplay blocked:", err)
        //             );
        //     }
        // }, 2140);
    });
</script>

<div style="display: none;">
    <audio bind:this={audio} src="/assets/soft-startup.mp3"></audio>
</div>

<div class="flex flex-col gap-4">
    <Location />
    <Profile />
    <Progres />
</div>
