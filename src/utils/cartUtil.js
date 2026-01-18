   
export const getCartTotalQuantity = (cart) => {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].cartQuantity 
    }
    return total
}

export const getCartTotalPrice = (cart,includeTaxShipping) => {
    let total = 0
    const tax = 3.99
    const shipping = 2.99
    for (let i = 0; i < cart.length; i++) {
        total += (cart[i].cartItem.price * cart[i].cartQuantity)
    }

    if (total === 0) return (0).toFixed(2)
    if (includeTaxShipping) return (total + tax + shipping).toFixed(2)
    return total.toFixed(2)
}