import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'

import { addToCart, loadProds } from './actions/cartActions'

 class Home extends Component{
    handleClick = (id)=>{
        console.log('INIT Home.handleClick')

        this.props.addToCart(id); 
    }

    render(){
        console.log('INIT Home.render')
        console.log('props=',this.props)
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            
                            
                            <Button onClick={()=>{this.handleClick(item.id)}}>Agregar</Button>
                            
                        
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Precio: ${item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">{(this.props.filter)?'Lista de '+this.props.filter:'Productos destacados'}</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log('INIT Home.mapStateToProps')
    console.log('state=',state)
    return {
        ...state 
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        loadProds: (items)=>{dispatch(loadProds(items))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)