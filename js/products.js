export function getProduct(productId) {
    let matchingProduct;
    
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct;
}

export const products = [
{
    id: '1',
    image: 'images/products/lodgetee.png',
    name: 'Grimwood Lodge',
    link: 'https://grimwood-village.printify.me/product/20208547/grimwood-lodge-tee',
},
{
    id: '2',
    image: 'images/products/runictee.png',
    name: 'Blizzard Camo',
    link: 'https://grimwood-village.printify.me/product/20078359/blizzard-camo-tee',
},
{
    id: '3',
    image: 'images/products/forgehammergreen.png',
    name: 'Forge Hammer',
    link: 'https://grimwood-village.printify.me/product/19843558/forge-hammer-tee',
},
{
    id: '4',
    image: 'images/products/sorceresstee.png',
    name: 'Head in the Clouds',
    link: 'https://grimwood-village.printify.me/product/20105330/head-in-the-clouds-tee',
},
{
    id: '5',
    image: 'images/products/hunter5.png',
    name: 'Grimwood Hunter Cap',
    link: 'https://grimwood-village.printify.me/product/20271467/grimwood-hunter-cap',
},
{
    id: '6',
    image: 'images/products/hunterhat.png',
    name: 'Grimwood Hunter Hat',
    link: 'https://grimwood-village.printify.me/product/20270554/grimwood-hunter-hat',
},
{
    id: '7',
    image: 'images/products/grimwoodvillagehat.png',
    name: 'Grimwood Cap',
    link: 'https://grimwood-village.printify.me/product/19898187/grimwood-hat',
},
{
    id: '8',
    image: 'images/products/grimwoodtruckerhat.png',
    name: 'Grimwood Trucker',
    link: 'https://grimwood-village.printify.me/product/19947455/grimwood-trucker',
},
{
    id: '9',
    image: 'images/products/grimwoodcrew.png',
    name: 'Grimwood Crewneck',
    link: 'https://grimwood-village.printify.me/product/19925694/grimwood-crewneck',
},
{
    id: '10',
    image: 'images/products/grimwoodhoodie.png',
    name: 'Grimwood Hoodie',
    link: 'https://grimwood-village.printify.me/product/19948042/grimwood-hoodie',
},
{
    id: '11',
    image: 'images/products/grimwoodlongsleeve.png',
    name: 'Grimwood Long Sleeve',
    link: 'https://grimwood-village.printify.me/product/20272956/grimwood-long-sleeve',
},
{
    id: '12',
    image: 'images/products/gvt.png',
    name: 'Grimwood Tee',
    link: 'https://grimwood-village.printify.me/product/19843412/grimwood-tee',
},
{
    id: '13',
    image: 'images/products/vowreavert.png',
    name: 'Vowrever Tee',
    link: 'https://grimwood-village.printify.me/product/19843337/vowreaver-tee',
},
{
    id: '14',
    image: 'images/products/fellhowlt.png',
    name: 'Fellhowl Tee',
    link: 'https://grimwood-village.printify.me/product/19844479/fellhowl-tee',
},
{
    id: '15',
    image: 'images/products/divinetee.png',
    name: 'Divine Marks',
    link: 'https://grimwood-village.printify.me/product/20108076/divine-marks-tee',
},
{
    id: '16',
    image: 'images/products/sdtee.png',
    name: 'San Diego Chapter Tee',
    link: 'https://grimwood-village.printify.me/product/20085862/san-diego-chapter-tee',
},
];
