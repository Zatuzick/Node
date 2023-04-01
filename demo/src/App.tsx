import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from './components/layouts/adminLayout'
import BaseLayout from './components/layouts/baseLayout'
import { IProduct } from './interface/product'
import HomeAdmin from './pages/admin/HomeAdmin'
import ProductsAdmin from './pages/admin/ProductsAdmin'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import { AddProduct, deleteProduct, getAllProduct, UpdateProduct } from "./api/product"
import ProductDetail from './pages/ProductDetail'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import Signin from './pages/Signin'

function App() {

  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllProduct();
      setProduct(data.products)
    })()
  }, [])
  const onHandleRemove = async (id: number) => {
    const { data } = await deleteProduct(id);
    setProduct(data.products)

  }
  const onHandleAdd = (product: IProduct) => {
    AddProduct(product).then(() => setProduct([...products, product]))
  }
  const onHandleUpdate = (product: IProduct) => {
    UpdateProduct(product).then(() => setProduct(products.map((item) => item._id == product._id ? product : item))) // cập nhật lại sản phẩm
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductsPage products={products} />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path='signin' element={<Signin />} />
        </Route>

        <Route path='/admin'>
          <Route index element={<HomeAdmin />} />
          <Route path='products' >
            <Route index element={<ProductsAdmin products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>

  )
}

export default App
