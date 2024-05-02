<script>
    import InfoCard from "$lib/components/InfoCard.svelte"
    import TimeLineItem from "../lib/components/timeLineItem.svelte";
    import TitleBar from "../lib/components/titleBar.svelte";
    import ReportGraph from "../lib/components/reportGraph.svelte";
    import Key from "../lib/components/key.svelte";
    import OrderStatus from"../lib/components/orderStatus.svelte";
    export let data
    const topSellingItems = data.topSellingItems
    console.log({topSellingItems})
    import TopSelling from"../lib/components/topSelling.svelte";
    import NewsUpdates from"../lib/components/newsUpdates.svelte";
    const newsStory =data.newsStory
    import Parent from "../lib/components/parent.svelte"

</script>
<div class="dashBoard">
    
    <div>
        <div class="topLeft">
            <InfoCard title="Sales" subTitle="Today" icon="bi bi-cart" number="145" delta="12%" direction="increase" bgColor="#f6f6fe" numberColor="green"/> 
            <InfoCard title="Revenue" subTitle="This Month" icon="bi bi-currency-dollar" number="3,264" delta="8%" direction="increase" color="#2eca6a" bgColor="#e0f8e9"/>
        </div>
        <div class="leftLower">
            <div class="yearSales">
            <InfoCard title="Sales" subTitle="This Year" icon="bi bi-people" number="1244" delta="12%" direction="Decrease" color="#ff771d" bgColor="#ffecdf"/>
            </div>
            
            <div class="todaysReports">
                <div>
                    <TitleBar title="Reports" subTitle="Today"/>
                    <img class="lineGraph"src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/line-chart-example.svg">
                    <div class="reportsKey">
                        <Key bgColor="blue" keyDescription="Sales"/>
                        <Key bgColor="green" keyDescription="Revenue"/>
                        <Key bgColor="orange" keyDescription="Customer"/>
                    </div>
                </div>            
            </div>
            <div class="recentSales">
                <TitleBar title="Recent Sales" subTitle="| Today"/>
                <div class="recentSalesHeader">
                    <div class="recentSalesDD">
                        <select>
                            <option>10</option>
                            <option>5</option>
                            <option>15</option>
                            <option>All</option>
                        </select>
                    </div>
                    <div>entries per page</div>
                    <div class="recentSalesSearch">
                        <input id="search"placeholder="Search...">
                    </div>
                </div>
                <div class="recentSalesCat">
                    <OrderStatus orderNumber="#" customer="Customer" product="Product" price="Price" status="Status" bgColor="white"/>
                </div>
                <div class="recentSalesInfo">
                    <OrderStatus orderNumber="#2644" customer="Angus Grady" product="Ut voluptatem id earum et" price="$67" status="Rejected" bgColor="#dc3545"/>
                    <OrderStatus orderNumber="#2049" customer="Ashleigh Langosh" product="At recusandae consectetur" price="$147" status="Approved" bgColor="#198754"/>
                    <OrderStatus orderNumber="#2457" customer="Brandon Jacob" product="At praesentium minu" price="$64" status="Approved" bgColor="#198754"/>
                    <OrderStatus orderNumber="#2147" customer="Bridie Kesller" product="Blanditiis dolor omnis similique" price="$47" status="Pending" bgColor=#ffc107/>
                    <OrderStatus orderNumber="#2644" customer="Raheem Lehner" product="Sunt similique distinctio" price="$165" status="Approved" bgColor="#198754"/>
                </div>
           
             </div>

             <div class="topSelling">
                <div class="topSellingHeader">
                    <div>Preview</div>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Sold</div>
                    <div>Revenue</div>
                </div>
                {#each topSellingItems as topSellingItems}
                <div class="topSellingItem">
                    <TopSelling preview="{topSellingItems.preview}" product="{topSellingItems.product}" color="#0d6efd"price="{topSellingItems.price}" sold="{topSellingItems.sold}" revenue="{topSellingItems.revenue}"/>
                </div>
                {/each}
            </div>
         
         
           
        </div>
    </div>
    <div class="dashBoardRight">
        <div class="activityReport">
         <TitleBar title="Recent Activity" subTitle=" |Today"/>
         <TimeLineItem minute="32 min" description="Quia quae rerum explicabo officiis beatae" bgColor="green"/>
         <TimeLineItem minute="56 min" description="Voluptatem blanditiis blanditiis eveniet" bgColor="red"/>
         <TimeLineItem minute="2 hrs" description="Voluptates corrupti molestias voluptatem"  bgColor="blue"/>
         <TimeLineItem minute="1 Day" description="Tempore autem saepe occaecati voluptatem tempore"  bgColor="#0dcaf0"/>
         <TimeLineItem minute="2 Days" description="Est sit eum reiciendis exercitationem"  bgColor="#ffc107"/>
         <TimeLineItem minute="4 weeks" description="Dicta dolorem harum nulla eius. Ut quidem quidem sit quas"  bgColor="#212529"/>
        </div>
        
        <div class="budgetReport">
            <div>
            <TitleBar title="Budget Report" subTitle="This Month"/>
            </div>
            <div class="keyCont">
                <Key bgColor="#012970" keyDescription="Allocated Budget"/>
                <Key bgColor="#198754" keyDescription="Actual Spending"/>
            </div>
            <img class="budgetGraph"src="https://i.stack.imgur.com/nVh6e.png" width="300">
        </div>

        <div class="websiteReport">
            <div>
                <TitleBar title="Website Traffic" subTitle="|Today"/>
                <div class="websiteKey">
                    <div class="wsKey1">
                        <Key bgColor="#012970" keyDescription="Search Engine"/>
                        <Key bgColor="#20c997" keyDescription="Direct"/>
                        <Key bgColor="#ffc107" keyDescription="Email"/>
                    </div>
                  
                    <div class="wsKey2">
                        <Key bgColor="#dc3545" keyDescription="Union Ads"/>
                        <Key bgColor="#0dcaf0" keyDescription="Video Ads"/>
                    </div>
                </div>
                <div>
                    <div class="websiteGraph">
                        <img src="https://scottplot.net/cookbook/4.1/images/pie_donut.png" width=380>
                    </div>
                </div>
            </div>

        </div>
        <div class="newsStory">
            <TitleBar title="News & Updates" subTitle=" |Today"/>
            <div class="newsArticles">
                {#each newsStory as newsStory}
                <NewsUpdates photo="{newsStory.photo}" headliner="{newsStory.headliner}" story="{newsStory.article}"/>
                {/each}

            </div>
        </div>

    </div>
    </div>
   
    <div>
        <Parent children=  {{
            sons:[
                {
                    name:"Ezequiel",
                    age:12
                }
            ],
            daughters:[
                {
                    name:"Royal",
                    age:2,
                },
                {
                    name:"Luna",
                    age:0
                }
            ],
            }}/>
    </div>

<style>
    
    .dashBoard{
        display:grid;
        grid-template-columns: 2fr 1fr;
        background-color: #f6f9ff;
        font-family:nunito ;
        margin-left: -3rem;
        padding-right:-4rem
    
    }
    .topLeft{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
   .yearSales{
    margin-top:-8rem;
   }
    .dashBoardRight{
        position:relative;
        padding-top:10px;
        padding-left: 1rem;
        align-items: center;
        padding-left:1rem;
        margin-top: 9.25rem;
        
    }
    .timeLine {
        position: relative;
        padding:1rem;
       
    }
    .budgetReport{
        background-color:white;
        margin-top:2rem;
    }
    .keyCont{
        display:grid;
        grid-template-columns:1fr 1fr;
        font-size:14px;
    }
    .budgetGraph{;
        margin-left:4rem;
        padding-top:3rem
    }
    .todaysReports{
        margin-left:5rem;
        margin-top:2rem;
        

    }

    .lineGraph{
        background-color:white;
    }
    .reportsKey{
        position:relative;
        justify-content:center;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top:-2rem;
        width:12rem;
        margin-left:20rem;
        font-size:14px
    }
    .websiteReport{
        margin-top:3rem;
    }
    .websiteKey{
        background:white;
        height:10rem
    }
    .wsKey1{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        font-size:12px;
        margin-left:2rem;


    }
    .wsKey2{
        display:grid;
        grid-template-columns: .25fr 1.75fr;
        font-size: 12px;
        margin-left:2rem
    }
    .websiteGraph{
        display:flex;
        justify-items: center;
        margin-top:-4rem
    }
    .recentSales{
        margin-left:5rem;
        background:white;
        margin-top:2rem
    }
    .recentSalesDD{
        text:black;
        margin-left:2rem
    }
    .recentSalesHeader{
        display:grid;
        grid-template-columns:.25fr 2fr .5fr;
        align-items:center;
        margin-top:2rem;
        text:left;
        padding-right:2rem;
    }
    #search{
        height:24px;
    }
    .recentSalesCat{
        margin-top:2rem;
        font-weight:700
    }
    .recentSalesInfo{
        position:relative;
        align-items:left;
        padding: 1rem;
        font-size:12px;
        margin-left:-1rem

    }
    .topSelling{
        background:white;
        margin-left:5rem;
        font-weight:700;
    }
    .topSellingHeader{
        position:relative;
        display:grid;
        grid-template-columns: .5fr 2fr .5fr .5fr .5fr;
        margin-bottom:1rem;
        align-items:left;
        margin-left:2rem;
        font-weight:700;
        margin-top:2rem;
        padding-top:2rem
    }
    .newsStory{
        margin-top:2rem
    }
</style>