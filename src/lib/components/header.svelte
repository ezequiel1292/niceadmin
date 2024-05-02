
<header >
    
    <div class="header">
        <div id="headerLeft">
            <div id="headerLeft1">
                <img width="30" height="30" src="//bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png">
            </div>
            <div id="headerLeft2">
                NiceAdmin
            </div>
            <div id="toggleMenu">
                <i class="bi bi-list"></i>
            </div>
        </div>

        <div class="headerMiddle">
            <div>
                <input placeholder="Search" id="headerSearch">
            </div>
        </div>

        <div class="headerRight">
            
            <div>
                <i class="bi bi-bell"></i>
            </div>
            <div>
                <i class="bi bi-chat-left-text"></i>
            </div>
            <div id="user">
                <div>
                    <img id="userPhoto" width="65" height="65" src="https://ew.com/thmb/2Dln9xz1FdfHqPLF4PddHP8fDhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/style-suits-gabriel-macht-0e886a00f2ca41b1864eaea1985daf50.jpg">

                </div>
                <div id="name">Harvey Specter</div>
                
            </div>
        </div>
    </div>
</header>

<style>

.header{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 40px;
    margin-bottom:-6rem;
}
#headerLeft{
    display: grid;
    grid-template-columns: .5fr 1.5fr .5fr;
    margin-left: 20px;
    color: #012970;
    font-family: nunito;
    font-size: 30px;
    font-weight: 700;
}
#headerLeft2{
    margin-left: -50px;
    margin-top: -4px;
    padding-left: 5px;
}
.headerMiddle{
    margin-left: -25px;
}
#headerSearch{
    width: 275px;
    height: 25px;
    background-image: url('https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: right center;
    border-radius: 5px;
    border-style: outset;
}
.headerRight{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}
i.bi-bell{
    font-size: 22px;
    padding-left: 180px;
    color: #012970

}
i.bi-chat-left-text{
    font-size: 22px;
    margin-left: 25px;
    color: #012970
}
#user{
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    
}
#userPhoto{
    margin-top: -15px;
    border-radius: 50px;
    margin-left: -50px;
}
#name{
    margin-left: -25px;
    font-family: nunito;
    font-weight: 600;
    color: #012970;
}
</style>