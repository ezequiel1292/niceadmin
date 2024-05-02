const topSellingItems = [
    {
        preview:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-1.jpg",
        product: "Ut inventore ipsa voluptas nulla",
        price: "$64",
        sold:"124",
        revenue:"$5828"
    },
    {
        preview:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-2.jpg",
        product: "Exercitationem similique doloremque",
        price: "$46",
        sold:"98",
        revenue:"$4508"
    },
    {
        preview:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-3.jpg",
        product: "Doloribus nisi exercitationem",
        price: "$59",
        sold:"74",
        revenue:"$4633"
    },
    {
        preview:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-1.jpg",
        product: "Officiis quaerat sint rerum error",
        price: "$32",
        sold:"63",
        revenue:"$2016"
    },
    {
        preview:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-5.jpg",
        product: "Sit unde debitis delectus repellendus",
        price: "$79",
        sold:"41",
        revenue:"$3239"
    },
]

const newsStory = [
    {
        photo:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-1.jpg",
        headliner:"Nihil blanditiis at in nihil autem",
        article:"Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum..."
    },

    {
        photo:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-3.jpg",
        headliner:"Id quia et et ut maxime similique occaecati ut",
        article:"Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam..."
    },

    {
        photo:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-2.jpg",
        headliner:"Quidem autem et impedit",
        article:"Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande..."
    },

    {
        photo:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-4.jpg",
        headliner:"Laborum corporis quo dara net para",
        article:"Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder..."
    },
    {
        photo:"https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-5.jpg",
        headliner:"Et dolores corrupti quae illo quod dolor",
        article:"Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius..."
    },
]
export const load = async ({ fetch, params  }) => {
    return {topSellingItems: topSellingItems, newsStory: newsStory}}