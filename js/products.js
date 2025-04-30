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
    image: 'images/products/forgehammergreen.png',
    name: 'Forge Hammer Tee',
    link: 'https://grimwood-village.printify.me/product/19843558/forge-hammer-tee',
},
{
    id: '2',
    image: 'images/products/vowreavert.png',
    name: 'Vowreaver Tee',
    link: 'https://grimwood-village.printify.me/product/19843337/vowreaver-tee',
},
{
    id: '3',
    image: 'images/products/fellhowlt.png',
    name: 'Fellhowl Tee',
    link: 'https://grimwood-village.printify.me/product/19844479/fellhowl-tee',
},
{
    id: '4',
    image: 'images/products/grimwoodvillaget.png',
    name: 'Grimwood Tee',
    link: 'https://grimwood-village.printify.me/product/19843412/grimwood-village-tee',
},
{
    id: '5',
    image: 'images/products/grimwoodvillagehat.png',
    name: 'Grimwood Hat',
    link: 'https://grimwood-village.printify.me/product/19898187/grimwood-hat',
},
{
    id: '6',
    image: 'images/products/grimwoodcrew.png',
    name: 'Grimwood Crewneck',
    link: 'https://grimwood-village.printify.me/product/19925694/grimwood-crewneck',
},
{
    id: '7',
    image: 'images/products/grimwoodtrucker.png',
    name: 'Grimwood Trucker',
    link: 'https://grimwood-village.printify.me/product/19947455/grimwood-trucker',
},
{
    id: '6',
    image: 'images/products/grimwoodcrew.png',
    name: 'Grimwood Crewneck',
    link: 'https://grimwood-village.printify.me/product/19925694/grimwood-crewneck',
},
];
