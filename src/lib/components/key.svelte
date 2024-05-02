<script>
    export let keyDescription
    export let bgColor
    let style=`background-color:${bgColor};`
</script>

<key>
    <div class="key">
        <div class="keyColor"{style}></div>
        <div class="keyDiscription">{keyDescription}</div>
    </div>
</key>

<style>          
.key{
    margin-top: 1rem;
    display:grid;
    grid-template-columns: .25fr 1.75fr;
    margin-left:3rem;
    background-color:white;
    background-color:white;
    
}
.keyColor{
    display:flex;
    position:center;
    border-radius:5px;
    width: 28px;
    height: 14px; 
}
.keyDescripton{
    
}
</style>