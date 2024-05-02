<script>
    export let title
    export let subTitle
    export let icon
    export let number
    export let delta
    export let direction
    export let color
    export let bgColor
    let style=`color:${color}; background-color:${bgColor};`
</script>

<div class="info-card">
    <div class="title">{title} <span>|{subTitle}</span></div>
    <main class="main">
        <div class="{icon}" {style}></div>
        <div class="rightSide">
            <div class="number">{number}</div>
            <div class="lowerRight">
                <div class="delta">{delta}</div>
                <div class="direction">{direction}</div>
            </div>
        </div>
    
    </main>
</div>
<!-- html -->


<style>
    .info-card{
        display:grid;
        grid-template-rows: 3rem;
        margin-left: 5rem;
        margin-top: 10rem;
        font-family: nunito;
        background-color: white;
        border-radius: 5px;
        padding-left: 1rem;
        padding-top: 1rem;
    }
    .main {
        display: grid;
        grid-template-columns: 3rem 1fr 1fr;
        height: 6rem;
    }
    .title{
        font-weight: 700;
    }
    .title span {
        font-weight: 200;
        color: silver;
    }
    .bi {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        color: #4154f1;
        border-radius: 2rem;
        background-color: rgb(237, 237, 237);
        width: 3.5rem;
        height: 3.5rem
    }
    .number{
        font-size: 35px;
        font-weight: 700;
        color: #012970;
    }

    .rightSide{
        margin-left: 25px;
    }
    .lowerRight{
        display:grid;
        grid-template-columns: 3rem 1fr 1fr;
    }



</style>