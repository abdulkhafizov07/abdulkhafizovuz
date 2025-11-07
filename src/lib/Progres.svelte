<script lang="ts">
    import {
        SiHtml5,
        SiJavascript,
        SiTypescript,
        SiCss,
        SiPython,
    } from "@icons-pack/svelte-simple-icons";

    const Skills = [
        {
            color: "bg-orange-500",
            icon: SiHtml5,
            name: "HTML",
            category: "markup language",
            progress: 100,
            weight: 1,
        },
        {
            color: "bg-yellow-500",
            icon: SiJavascript,
            name: "JavaScript",
            category: "programming language",
            progress: 99,
            weight: 5,
        },
        {
            color: "bg-blue-500",
            icon: SiTypescript,
            name: "TypeScript",
            category: "programming language",
            progress: 88,
            weight: 10,
        },
        {
            color: "bg-sky-500",
            icon: SiCss,
            name: "CSS",
            category: "stylesheet",
            progress: 97,
            weight: 2,
        },
        {
            color: "bg-blue-400",
            icon: SiPython,
            name: "Python",
            category: "programming language",
            progress: 80,
            weight: 15,
        },
    ];

    const DisplaySkills = Skills.sort(
        (a, b) => b.progress + b.weight * 10 - (a.progress + a.weight * 10)
    );

    let allSkills = false;
</script>

<div
    class="card group w-full border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/60 backdrop-blur-3xl rounded-2xl select-none transition-colors duration-200 ease-in"
>
    <div class="card-body p-6">
        <h3 class="card-title text-lg font-bold mb-4">Skills</h3>

        <ul class="flex flex-col gap-4">
            {#each DisplaySkills.slice(0, allSkills ? DisplaySkills.length : 3) as item}
                <li
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class={"w-12 h-12 text-white flex items-center justify-center rounded-md " +
                                item.color}
                        >
                            <item.icon />
                        </div>
                        <div>
                            <div class="font-semibold">{item.name}</div>
                            <div
                                class="text-xs uppercase font-semibold opacity-60"
                            >
                                {item.category}
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <progress
                            class="progress w-full sm:w-56"
                            value={item.progress}
                            max="100"
                        ></progress>
                        <span class="text-sm">{item.progress}%</span>
                    </div>
                </li>
            {/each}
        </ul>

        {#if !allSkills}
            <div class="flex justify-center mt-4">
                <button
                    class="px-4 py-2 text-sm font-semibold rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                    on:click={() => (allSkills = true)}
                >
                    Show all
                </button>
            </div>
        {/if}
    </div>
</div>
