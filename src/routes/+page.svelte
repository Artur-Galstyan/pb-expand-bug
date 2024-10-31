<script lang="ts">
    import { onMount } from "svelte";

    let output = $state("");

    async function makeReq() {
        const req = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = await req.json();
        output = res;
    }

    onMount(async () => {});
</script>

{JSON.stringify(output)}

<button onclick={makeReq}>Make Request</button>
