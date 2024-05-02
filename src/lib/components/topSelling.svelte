<script>
    export let preview
    export let product 
    export let price 
    export let sold 
    export let revenue
    export let color
    let style=`color:${color}`
</script>

<div class="topSelling">
    <img src="{preview}" class="preview">
    <div class="product"{style}>{product}</div>
    <div class="price">{price}</div>
    <div class="sold">{sold}</div>
    <div class="revenue">{revenue}</div>
</div>

<style>
    .topSelling{
        position:relative;
        display:grid;
        grid-template-columns: .5fr 2fr .5fr .5fr .5fr;
        margin-bottom:1rem;
        align-items:left;
        margin-left:2rem;
        margin-top:2rem
    }
    .preview{
        height:60px;
    }
</style>
