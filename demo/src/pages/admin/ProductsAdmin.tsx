import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { IProduct } from '../../interface/product';


interface ProductsAdminProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const ProductsAdmin = ({ products, onRemove }: ProductsAdminProps) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <div>Loading...</div>
    }
    // if (!products) return <div>Loading...</div>

    const removeProduct = (id: number) => {
        onRemove(id)
    }

    return (
        <div>
            <div>
                <h2 className='red'>ProductsAdmin</h2>
            </div>
            <div>
                <Link to={"/admin/products/add"}>Add new Product</Link>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {products.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <th> {index + 1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <button onClick={() => removeProduct(item._id!)}>Remove</button>

                                    </th>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}

export default ProductsAdmin;