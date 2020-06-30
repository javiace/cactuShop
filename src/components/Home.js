import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import { addToCart, loadProds } from './actions/cartActions'

 class Home extends Component{
    
    componentDidMount =() =>{
        console.log('Init componentWillMount')
        axios
        .get('https://my-json-server.typicode.com/javiace/cactuShop/prods')
        .then(response => {
                console.log(response)
                this.props.loadProds(response.data)
              })
        
    }
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Precio: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Lista de productos</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        loadProds: (items)=>{dispatch(loadProds(items))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)