import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({ id: 0, name: '', price: 0 })
    useEffect(() => {
        getOneProduct(Number(id)).then(({ data }) => setProduct(data))
    }, [])
    return (
        <div>
            <h2>ProductDetail</h2>
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductDetail