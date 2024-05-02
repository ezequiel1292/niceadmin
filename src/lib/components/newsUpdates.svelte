<script>
    export  let photo
    export  let headliner
    export  let story
</script>

<div>
    <div class=" newsUpdates">
        <img src="{photo}" class="photo">

        <div class="article">
            <div class="headliner">{headliner}</div>
            <div class="story">{story}</div>
         </div>
    </div>
</div>

<style>
    .newsUpdates {
        display:grid;
        grid-template-columns:.5fr 1.5fr;
        padding-left:2rem;
        padding-top:2rem;
        background:white

    }
    .photo{
        height:50px;
        border-radius: 5px
    }
    .headliner{
        margin-bottom: 8px;
        font-weight:700
    }
    .story{
        font-size:12px
    }
</style>