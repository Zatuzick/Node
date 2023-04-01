import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props: any) => {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    // useEffect(() => {
    //     const currentProduct = props.products.find((product: any) => product.id == id)// tìm sản phẩm cần update
    //     reset(currentProduct) // cập nhật lại state
    // }, [props])
    const onHandleSubmit = (data: any) => {
        props.onUpdate(data);
    }
    return (
        <div>
            <h2>Update Product</h2>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="number" {...register("price")} />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage