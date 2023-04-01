import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface IProduct {
    id: number,
    name: string,
    price: number
}

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const AddProduct = (props: any) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onHandleSubmit = (data: any) => {
        props.onAdd(data);
        navigate('/admin/products')
    }

    return (
        <div>
            <h2>AddProduct</h2>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="number" {...register("price")} />
                </div>
                <button type="submit">Add new Product</button>
            </form>
        </div>
    )
}

export default AddProduct