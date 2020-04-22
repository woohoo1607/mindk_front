export const totalPriceAllOrder = (productsCartData, productsCart) => {
    return productsCartData.reduce((sum,productsData) => {
        return sum+(+productsCart.find(productsCart=>productsCart.id===productsData.id).count)*(+productsData.price)
    },0)
};
