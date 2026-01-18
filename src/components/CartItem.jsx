import styles from "../styles/CartItem.module.css"

const CartItem = ( {cartItem,setCart,itemQuantity} ) => {

        console.log(itemQuantity)
    console.log(cartItem)

    const itemName = cartItem.title
    const itemPrice = cartItem.price
    const itemImage = cartItem.image
    return (
        <div className={styles.cartCard}>
            <img src={itemImage} alt={itemName} />
            <div className={styles.cartItemContainer}>
                <div className={styles.cartItemInfo}>
                    <p>{itemName}</p>
                    <p>${itemPrice * itemQuantity}</p>
                </div>
                <div className={styles.cartItemController}>
                    <p>{itemQuantity}x</p>
                    <button>
                        X
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartItem;