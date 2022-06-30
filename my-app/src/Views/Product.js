import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product() {

    //for http requests
    const url = 'http://localhost:3000/Donuts'
    const [product, setProduct] = useState(null)

        useEffect(() => {
            axios.get(url)
            .then(response =>{
                setProduct(response.data)
            })
        },[url]) // ensures that netwrk request only runs once
        
        if(product) {
            return(
                <div>
                    <h1>{product.name}</h1>
                </div>
            )
        }
    return(
        <div>
        </div>
    )
    
}
 export default Product