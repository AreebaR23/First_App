import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Product() {

    //for http requests
    const {id} = useParams()
    const url = `http://localhost:3000/Donuts/${id}`
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
                    <div>
                        <img src = {product.image_url}/>
                    </div>
                </div>
            )
        }
    return(
        <div>
        </div>
    )
    
}
 export default Product