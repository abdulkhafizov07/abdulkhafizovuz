<section id="page">
    <div
        class="flex w-full h-screen items-center justify-center bg-black overflow-hidden"
        id="background"
    >
        <video
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            poster="/assets/background-preview.jpg"
            class="w-full h-full object-cover"
        >
            <!-- Full HD for large screens -->
            <source
                src="/assets/background-1080p.mp4"
                type="video/mp4"
                media="(min-width: 1200px)"
            />
            <!-- HD for smaller screens -->
            <source
                src="/assets/background-720p.mp4"
                type="video/mp4"
                media="(max-width: 1199px)"
            />
            <track kind="captions" />
            Your browser does not support the video tag.
        </video>
    </div>
</section>
