<script>
    export let minute
    export let description 
    export let bgColor
    let style=`background-color:${bgColor};`
</script>

<div class="time-line">
    <div class="main">
        <div class="minute">{minute}</div>
    </div>
    <div class="border"></div>
    <div class="statusColor"{style}></div>
    <div> 
        <div class="description">{description}</div>
    </div>

</div>

<style>
    .time-line{
        display:grid;
        grid-template-columns: .5fr .5fr .25fr 1.25fr;
        font-family: nunito;
        background-color: white;
        position: relative;
        font-size: 1rem;
        padding-left:1rem;
        padding:.5rem;
    }
        
    .description{
        font-size: 16px;
        margin-left: -6rem;
        padding-bottom: .5rem;
    }
    .border{
        border-left: 4px solid lightgray;
        position:relative;
        top: 1rem;
        margin-left:-2px
    }
    .statusColor{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25rem;
        width: 14px;
        height: 14px;
        margin-left: -80px;
    }
    .border{
        height: 100%;
        
    }
</style>