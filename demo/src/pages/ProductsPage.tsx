import '/src/App.css';
import React from 'react'
import { useEffect, useState } from 'react'


interface IProduct {
    id: number,
    name: string,
    price: number
}

interface IProps {
    products: IProduct[],
}
const ProductsPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        setData(props.products)
    }, [props])

    return (
        <div>
            <div>
                <h2>ProductsPage</h2>
            </div>

            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    {data.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <th> {index + 1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.price}</th>

                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}
export default ProductsPage