<script>
    import { onMount } from 'svelte';

    var year;

    onMount(() => {
        const date = new Date();
        year = date.getFullYear();
    });

</script>

<footer>
    <p> &copy; fuwasegu {year}</p>
</footer>

<style>
    footer {
        border-top: solid thin #a7a7a7;
        margin-top: 24px;
        display: flex;
        justify-content: center;
    }

    p {
        margin: 4px;
        color: #FB7AFC;
    }
</style>
