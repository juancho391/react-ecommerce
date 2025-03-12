export const totalPrice = (productsList)=>{
    let totalPrice = 0; 
    productsList.forEach(product => totalPrice += product.price)
    return totalPrice
}