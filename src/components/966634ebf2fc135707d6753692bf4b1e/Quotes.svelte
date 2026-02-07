<script>
    import Typewriter from "svelte-typewriter";
</script>

<div
    class="w-full min-h-26 xl:max-h-26 p-4 flex flex-col items-start justify-start text-lg font-suse-mono overflow-y-hidden"
>
    <Typewriter cursor={false} mode="cascade">
        <p class="text-green-700 w-full">
            ➜
            <span class="text-blue-400 font-normal">git:(</span><span
                class="text-red-400 font-normal">main</span
            ><span class="text-blue-400 font-normal">)</span>
            <span class="text-amber-300">✗</span>
            <span>whoami</span>
        </p>
        <p class="text-blue-500 w-full">
            <span>abdulkhafizov07</span>
            <span class="text-white">a.k.a</span>
            <span>newjasjan, elwn</span><span class="text-gray-500">c</span>
        </p>
        <p class="text-green-700 w-full">
            ➜
            <span class="text-blue-400 font-normal">git:(</span><span
                class="text-red-400 font-normal">main</span
            ><span class="text-blue-400 font-normal">)</span>
            <span class="text-amber-300">✗</span>
        </p>
    </Typewriter>
</div>
