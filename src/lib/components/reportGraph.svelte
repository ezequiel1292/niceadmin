<script>
    export let title 
    export let subTitle
    
</script>

<div class="reportGraph">
    <div class="title">{title} <span>| {subTitle}</span></div>
</div>

<style>
.reportGraph{
    background-color: white;
        border-radius: 5px;
        padding-left: 1rem;
        padding-top: 1rem;   
        margin-top: 1rem;
 }

.title{
    font-weight: 700;
}    
.title span{
    font-weight: 300;
    color: silver;
}
</style>