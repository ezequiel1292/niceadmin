<script>
    export let orderNumber
    export let customer 
    export let product
    export let price
    export let status
    export let bgColor
    export let color
    export let style=`background-color:${bgColor};color:${color}`
</script>

<div class="orderStatus">
    <div class="orderNumber">{orderNumber}</div>
    <div class="customer">{customer}</div>
    <div class="product">{product}</div>
    <div class="status"{style}>{status}</div>
</div>

<style>
    .orderStatus{
        position:relative;
        display:grid;
        grid-template-columns: .5fr 1fr 1.5fr .5fr;
        margin-bottom:1rem;
        align-items:left;
        margin-left:2rem
    }
    .status{
    border-radius:5px;
    width:71px
    }

</style>