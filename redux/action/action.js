

export function itemCart(item){
    return{
        type:"item_Cart",
        data:item
    }
}
export function favouriteItems(item){
    return{
        type:"favourite_Items",
        data:item
    }
}