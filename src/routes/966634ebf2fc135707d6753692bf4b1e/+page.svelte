<script>
    import GlassyBackground from "../../components/966634ebf2fc135707d6753692bf4b1e/GlassyBackground.svelte";
    import Profile from "../../components/966634ebf2fc135707d6753692bf4b1e/Profile.svelte";
</script>

<div class="container mx-auto">
    <div class="w-full h-screen grid grid-cols-12 grid-rows-12 p-8 gap-8">
        <div class="col-span-5 row-span-2">
            <Profile />
        </div>
        <div
            class="col-span-5 row-span-2 flex items-center justify-center flex-col gap-2"
        >
            <GlassyBackground></GlassyBackground>
            <GlassyBackground></GlassyBackground>
        </div>
        <div class="col-span-2 row-span-2">
            <GlassyBackground></GlassyBackground>
        </div>
    </div>
</div>
