<script>
    import GlassyBackground from "../../components/966634ebf2fc135707d6753692bf4b1e/GlassyBackground.svelte";
    import Profile from "../../components/966634ebf2fc135707d6753692bf4b1e/Profile.svelte";
    import Quotes from "../../components/966634ebf2fc135707d6753692bf4b1e/Quotes.svelte";
    import Technologies from "../../components/966634ebf2fc135707d6753692bf4b1e/Technologies.svelte";
</script>

<div class="container mx-auto">
    <div class="w-full h-full grid grid-cols-12 p-8 gap-8">
        <div
            class="col-span-12 order-1 lg:col-span-8 xl:col-span-6 2xl:col-span-5 row-span-2"
        >
            <Profile />
        </div>
        <div
            class="col-span-12 order-2 md:col-span-8 lg:col-span-6 lg:order-3 xl:order-2 2xl:col-span-5 row-span-2 flex items-center justify-center flex-col gap-2"
        >
            <Technologies />
            <GlassyBackground>
                <Quotes />
            </GlassyBackground>
        </div>
        <div
            class="col-span-6 order-3 md:col-span-4 lg:order-2 xl:col-span-3 xl:order-3 2xl:col-span-2 row-span-2"
        >
            <GlassyBackground></GlassyBackground>
        </div>
    </div>
</div>
