import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAllCart, removeFromCart } from '../store/action/actions'




function Cart(props) {

    //functions 

    const placeOrder = () => {
            props.deleteAllCart()
            alert('موقع تجريبي بتقنية الRedux وليست لغرض الشراء لهذا سيتم حذف جميع المنتجات الموجودة بالسلة بدلاً من انشاء طلب شراء')
    }

    const products = props.cartItem.map((item , index) => {
        return(
            <div className="col-3" key={item.product.id}>
                <div className="card">
                        <img src={item.product.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.product.name}</h5>
                            <p className="card-text">
                                {item.product.price}$ <br/>
                                Quantity : {item.quantity}<br/>
                                Total : {item.quantity * item.product.price}$
                            </p>
                            <button onClick={() => props.removeFromCart(index)} to="#" className="btn btn-danger">
                            <i className="fa fa-trash mr-1"></i>
                                Delete
                            </button>
                        </div>
                </div>
            </div>
        )
    }) 
    return (
        <div>
            <h1 className="my-4 text-center">Cart</h1>
            <div className="row">
                {products}
            </div>
            <h4 className="mt-4">
                Total: {props.total}$
            </h4>
            <button className="mt-3 btn btn-primary btn-black" style={{width:'100%'}} onClick={placeOrder}>Place Order</button>
        </div>
    )
}

// Redux 
const mapStateToProps = (state) =>{
    return{
        total : state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
        cartItem : state.cart
    };
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeFromCart : (index) => dispatch(removeFromCart(index)),
        deleteAllCart : () => dispatch(deleteAllCart())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)