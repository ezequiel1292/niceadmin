<script>
    import Son from "./son.svelte"
    import Daughter from"./daughter.svelte"
    export let children
</script>

<div>
    {#each children.sons as son}
        <Son name="{son.name}" age="{son.age}"/>
    {/each}
    {#each children.daughters as daughter}
        <Daughter name="{daughter.name}" age="{daughter.age}"/>
    {/each}
</div>