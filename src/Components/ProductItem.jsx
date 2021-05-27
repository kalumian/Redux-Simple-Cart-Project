import React from 'react'
import {Link} from "react-router-dom"
function ProductItem({image, price, name, id}) {
    return (
        <div className="card">
            <img src={`${image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{`${price}$`}</p>
                    <Link to={`/products/${id}`} className="btn btn-primary">Show Product</Link>
                </div>
        </div>
    )
}

export default ProductItem
