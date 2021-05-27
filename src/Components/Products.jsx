import React from 'react'
import ProductItem from './ProductItem'
import AllProducts from '../products.json'
function Products() {
    const products = AllProducts.map(product => {
        return(
            <div className="col-4 mt-3 mb-3" key={product.id}>
                <ProductItem price={product.price} image={product.image} name={product.name} id={product.id} />
            </div>
        )
    })
    return (
        <div>
            <h1 className="my-4 text-center">Products</h1>
            <div className="row">
                {products}
            </div>
        </div>
    )
}

export default Products
