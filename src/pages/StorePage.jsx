import { useEffect, useState } from "react";
import styles from "../styles/Storepage.module.css"
import Card from "../components/Card";
import { useOutletContext } from "react-router";

const Storepage = () => {

    const {cart, setCart} = useOutletContext();
    const [products,setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

useEffect(() => {
    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')

            if (!response.ok) throw new Error("Failed to fetch") // If anything other than 200 is sent back error

            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoaded(true)
        }
    }

    getProducts()

    }, [])

    if (!loaded) return (
        <main>
            Loading
        </main>
    )

    return (
        <main>
            
            <div className={styles.cardContainer}>
                {products.map((item) => {
                    console.log(item)
                    return <Card 
                        item={item}
                        name={item.title} 
                        image={item.image} 
                        description={item.description} 
                        price={item.price}
                        setCart={setCart}
                        key = {crypto.randomUUID()}
                    />
                } )}
            </div>


        </main>
    )
}

export default Storepage;