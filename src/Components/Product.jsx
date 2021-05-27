import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import AllProducts from '../products.json'
import { addToCart } from '../store/action/actions'


function Product(props) {
// State
    const [Product, SetProduct] = useState([])
    const [Loding, SetLoding] = useState(true)
    const [quantiry, setQuantiry] = useState(0)

// Component Did mount
    useEffect(() => {
        const id = props.match.params.id
        const Product = AllProducts.filter(elemnt => elemnt.id === Number(id))
        SetProduct(Product)
        SetLoding(false)
      }, [])
      
 // Functions 
 const handleQuantity = (e) =>{
     const value = e.target.value
     if(value < 0 )
        return ;
     setQuantiry(value)
    }

const addToCart = (Product, quantiry) =>{
    props.addToCart(Product[0], quantiry)
} 

// Product Template
      const product = Product.map(item => {
          return(
            <div className="mt-5" key={item.id}>
            <div className={'row'}>

                <div className="col-6">
                    <img src={item.image} width={'100%'}/>
                </div>

                <div className="col-6">
                <h1>{item.name}</h1>
                    <p>Price: {item.price}$</p>
                    <p>{item.description}</p>

                    <br/><br/>

                    <input type="number" value={quantiry} onChange={handleQuantity}/>

                    <br /><br />

                    <p>Total : {quantiry * item.price}$</p>
                    <button className="btn btn-primary" onClick={() => addToCart(Product, quantiry)}>
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
          )
      })
// Return Component
    return (
        <div>
            {Loding ? <h3>Loding ...</h3> : product}
            <h6  className="mt-5  font-italic" style={{textDecoration : 'underline', cursor: 'pointer'}} onClick={() => props.history.goBack()}>Back</h6>
        </div>
    )
}
// Redux !
const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart : (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    }
}

export default connect(null, mapDispatchToProps)(Product)