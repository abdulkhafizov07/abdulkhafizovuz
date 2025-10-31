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
            progress: 73,
        },
        {
            color: "bg-yellow-500",
            icon: SiJavascript,
            name: "JavaScript",
            category: "programming language",
            progress: 99,
        },
        {
            color: "bg-blue-500",
            icon: SiTypescript,
            name: "TypeScript",
            category: "programming language",
            progress: 88,
        },
        {
            color: "bg-sky-500",
            icon: SiCss,
            name: "CSS",
            category: "stylesheet",
            progress: 63,
        },
        {
            color: "bg-blue-400",
            icon: SiPython,
            name: "Python",
            category: "programming language",
            progress: 78,
        },
    ];
    const DisplaySkills = Skills.sort((a, b) => b.progress - a.progress);

    let allSkills = $state(false);
</script>

<div
    class="card group w-full border border-zinc-700 bg-black/10 hover:bg-black/60 backdrop-blur-3xl rounded-2xl select-none transition-colors duration-200 ease-in"
>
    <div class="card-body p-4">
        <h3 class="card-title">Skills</h3>

        <ul class="list">
            {#each DisplaySkills.slice(0, allSkills ? DisplaySkills.length : 3) as item}
                <li class="list-row items-center">
                    <div
                        class={"w-12 aspect-square flex items-center justify-center " +
                            item.color}
                    >
                        <item.icon />
                    </div>
                    <div>
                        <div>{item.name}</div>
                        <div class="text-xs uppercase font-semibold opacity-60">
                            {item.category}
                        </div>
                    </div>
                    <div class="space-x-2">
                        <progress
                            class="progress w-56"
                            value={item.progress}
                            max="100"
                        ></progress>
                        <span>{item.progress}%</span>
                    </div>
                </li>
            {/each}
        </ul>

        {#if !allSkills}
            <div class="flex justify-center">
                <button onclick={() => (allSkills = true)}>Show all</button>
            </div>
        {/if}
    </div>
</div>
