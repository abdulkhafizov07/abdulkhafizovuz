<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import Profile from "$lib/Profile.svelte";
    import Location from "$lib/Location.svelte";
    import Progres from "$lib/Progres.svelte";
    import TheArt from "$lib/TheArt.svelte";

    let audio: HTMLAudioElement;

    let videoSrc = "/assets/index/background.webm";
    let videoEl: HTMLVideoElement | null = null;

    function updateThemeMedia(e?: MediaQueryListEvent) {
        const isDark = e
            ? e.matches
            : window.matchMedia("(prefers-color-scheme: dark)").matches;

        videoSrc = isDark
            ? "/assets/index/background.webm"
            : "/assets/index/background-light.mp4";
    }

    onMount(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", updateThemeMedia);

        updateThemeMedia();

        setTimeout(() => {
            if (audio) {
                audio
                    .play()
                    .catch((err) =>
                        console.log("Audio autoplay blocked:", err)
                    );
            }
        }, 2140);

        return () => {
            mediaQuery.removeEventListener("change", updateThemeMedia);
        };
    });

    afterUpdate(() => {
        if (videoEl) {
            videoEl.load();
        }
    });
</script>

<div style="display: none;">
    <audio bind:this={audio} src="/assets/index/soft-startup.mp3"></audio>
</div>

<div id="page">
    <div
        class="flex w-full h-screen items-center justify-center bg-white dark:bg-black overflow-hidden"
        id="background"
    >
        <video
            bind:this={videoEl}
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            class={`w-full h-full object-cover ${videoSrc.endsWith(".mp4") ? "opacity-100" : "opacity-60"}`}
        >
            <source
                src={videoSrc}
                type={`video/${videoSrc.endsWith(".mp4") ? "mp4" : "webm"}`}
            />
            <track kind="captions" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div
        class="fixed top-0 left-0 w-full max-h-screen overflow-y-auto py-12 z-10"
    >
        <div class="container max-w-196 mx-auto p-4">
            <div class="flex flex-col gap-4">
                <Location />
                <TheArt />
                <Profile />
                <Progres />
            </div>
        </div>
    </div>
</div>
