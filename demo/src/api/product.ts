import { IProduct } from "../interface/product";
import instance from "./instance";

const user = JSON.parse(localStorage.getItem("user")!);
export const getAllProduct = () => {
    return instance.get("/products")
}

export const getOneProduct = (id: number) => {
    return instance.get("/products/" + id)
}

export const deleteProduct = (id: number) => {
    return instance.delete("/products/" + id, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}

export const AddProduct = (product: IProduct) => {
    return instance.post("/products", product, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}

export const UpdateProduct = (product: IProduct) => {
    return instance.put("/products/" + product._id, product, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}