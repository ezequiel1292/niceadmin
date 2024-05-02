<script>
    export let title
    export let subTitle
</script>

<div class="titleBar">
    <div class="title">{title}<span class="subTitle">{subTitle}</span></div>
    
</div>

<style>
 .titleBar{
    font-family: nunito;
    background-color: white;
    padding-bottom: 10px;
    padding-top: 2rem;
    padding-left:2rem
}
.title{
    font-weight: 700;
}    
.title span{
    font-weight: 300;
    color: silver;
}
</style>
    
