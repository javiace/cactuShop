import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping, setMessage } from './actions/cartActions'

class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    handleCheckout =(e) =>{
        if(!this.refs.cName.value.length || !this.refs.cAddress.value.length || !this.refs.cMail.value.length) 
            this.props.setMessage({variant: 'danger', text:'Debe llenar todos los datos del cliente'})
        else{
            alert('Gracias por su compra. En breve recibirá un correo con la confiación de su peidio')
            window.location.href = "/"
            //window.location.reload(true); 
        }

    }

    render(){
        if(this.props.addedItems.length)
         return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Envío(+ $6)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: ${this.props.total} </b></li>
                    </div>
                    <h5>Datos de cliente:</h5>
                    <div className="checkout">
                        <label>Nombre:</label><input type="text" ref="cName"/>
                        <label>Dirección:</label><input type="text" ref="cAddress"/>
                        <label>Correo:</label><input type="text" ref="cMail"/>
                        <button className="waves-effect waves-light btn" onClick={this.handleCheckout}>Comprar</button>
                    </div>
                 </div>
           
            )
        else
            return (
                <div ref="shipping"/>
            )
    }
}

const mapStateToProps = (state)=>{
    return{
        ...state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        setMessage: (payload)=>{dispatch(setMessage(payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
