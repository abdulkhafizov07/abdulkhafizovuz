<script>
    import {
        SiTelegram,
        SiInstagram,
        SiDiscord,
        SiGithub,
    } from "@icons-pack/svelte-simple-icons";
</script>

<div
    class="card group w-full border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/60 backdrop-blur-3xl rounded-2xl select-none transition-colors duration-200 ease-in"
>
    <div class="card-body p-6">
        <div class="flex gap-4 items-center flex-col md:flex-row">
            <div
                class="avatar saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in"
            >
                <div class="w-42 rounded-2xl">
                    <img
                        src="/assets/pfp.jpg"
                        alt="Telegram profile"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div class="w-full">
                <h1
                    class="card-title mb-1 uppercase text-2xl md:text-4xl text-black dark:text-white font-bold transition-colors duration-200 ease-in"
                >
                    Abdulkhafizov
                </h1>

                <div class="mb-4">
                    <p class="text-zinc-700 dark:text-zinc-300">I am from mars.</p>
                </div>

                <div class="mb-2">
                    <h3
                        class="text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 font-medium tracking-wider transition-colors duration-200 ease-in"
                    >
                        🇺🇸 USA &#x2022; 🇺🇿 Uzbekistan
                    </h3>
                </div>

                <div class="flex gap-4 gap-y-2 items-center flex-wrap">
                    <a
                        href="https://t.me/abdulkhafizov07"
                        aria-label="Telegram account"
                        target="_blank"
                        rel="noopener norefferer"
                        class="link dark:link-info flex gap-x-1 items-center transition-colors duration-200 ease-in"
                    >
                        <span class="icon"><SiTelegram size={16} /></span>
                        <span class="text">Telegram</span></a
                    >
                    <a
                        href="https://instagram.com/asm_x86_64"
                        aria-label="Telegram account"
                        target="_blank"
                        rel="noopener norefferer"
                        class="link dark:link-info flex gap-x-1 items-center transition-colors duration-200 ease-in"
                    >
                        <span class="icon"><SiInstagram size={16} /></span>
                        <span class="text">Instagram</span></a
                    >
                    <a
                        href="https://discordapp.com/users/1173919630855766087"
                        aria-label="Telegram account"
                        target="_blank"
                        rel="noopener norefferer"
                        class="link dark:link-info flex gap-x-1 items-center transition-colors duration-200 ease-in"
                    >
                        <span class="icon"><SiDiscord size={16} /></span>
                        <span class="text">Discord</span></a
                    >
                    <a
                        href="https://github.com/abdulkhafizov07"
                        aria-label="Telegram account"
                        target="_blank"
                        rel="noopener norefferer"
                        class="link dark:link-info flex gap-x-1 items-center transition-colors duration-200 ease-in"
                    >
                        <span class="icon"><SiGithub size={16} /></span>
                        <span class="text">GitHub</span></a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
