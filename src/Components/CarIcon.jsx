import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/CartIcon.css'
import {connect} from 'react-redux'
function CarIcon(props) {
    return (
        <Link to="/cart">
        <div id="cart-icon">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{props.totalQuantity}</span>
        </div>
        </Link>
    )
}

const mapStateToProps = (state) =>{
    return{
        totalQuantity : state.cart.reduce((total, item) => total + Number(item.quantity), 0)
    }
}

export default connect(mapStateToProps)(CarIcon)
