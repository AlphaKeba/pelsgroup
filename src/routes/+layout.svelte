<script>
    export let data; // Données chargées depuis +layout.server.js
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <link rel="icon" href={data.favicon} />
</svelte:head>

<slot />
