import { useState } from "react"
import styles from "../styles/Card.module.css"

const Card = ( {item,name,description,price,image,setCart} ) => {

    const [quantity,setQuantity] = useState(1)

    const handleQuantityChange = (e)=>{
        const value = e.target.value
        setQuantity(Number(value))
    }

    const itemId = item.id
    const addItemToCart = (e) => {
        setCart(prevCart => {
            // Change itemQuantity of cartItem if id matches
            const sameItem = prevCart.find((i => i.cartItem.id === itemId))

            // If sameItem then create a new list of items with old items but only update the quantity size of sameitem
            if (sameItem) {
                return prevCart.map(i => {
                    if (i === sameItem) {
                        return {cartItem: item,cartQuantity: i.cartQuantity + quantity}
                    } else {
                        return i
                    }
                })
            } else {
                return [...prevCart,{cartItem:item,cartQuantity: quantity}]
            }

        })
    }



    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src ={image} alt ={name}></img>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardPrice}>${price}</p>
            </div>
            <div className={styles.inputSection}>
                <input type="number" value={quantity} onChange={handleQuantityChange}></input>
                <button className={styles.addCartButton} onClick={addItemToCart} >Add To Cart</button>
            </div>
        </div>
    )
}

export default Card;