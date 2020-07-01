import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { addToCart, loadProds, setMessage } from './actions/cartActions'
import Msg from './Msg'
    
class NavbarCS extends Component{

  setProdFilter(fl){
    axios
    .get('https://my-json-server.typicode.com/javiace/cactuShop/'+fl)
    .then(response => {
            let filter = response.config.url.substring(response.config.url.lastIndexOf('/') + 1)
            console.log('response=',response, 'filter=', filter)

            this.props.loadProds(response.data, (filter!='prods'?filter:null))
            if (filter!='prods')
              this.props.setMessage({variant: 'info', text:response.data.length+' productos disponibles'})
          })
    .catch(error =>{
          console.log(error)
          this.props.setMessage({variant: 'danger', text:'Error al consultar'})
    })
  }
   
  componentDidMount =() =>{
    console.log('INIT Navbar.componentWillMount')
    this.setProdFilter('prods')
  }

  render(){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand><Link to="/cactuShop/">CactuShop</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav >
      <NavDropdown title="Catálogo" className="bgmenu" id="basic-navbar-nav">
        <NavDropdown.Item onClick={()=>{this.setProdFilter('cactus')}}><Link to="/cactuShop/" className="bgmenu">Cactus</Link></NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item onClick={()=>{this.setProdFilter('suculentas')}}><Link to="/cactuShop/" className="bgmenu">Suculentas</Link></NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item onClick={()=>{this.setProdFilter('accesorios')}}><Link to="/cactuShop/" className="bgmenu">Accesorios</Link></NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Nav><Link to="/cactuShop/cart" className="bgmenu">Mi carrito <i class="fas fa-shopping-cart"></i></Link></Nav>
      </Navbar>
      <Msg msg={{variant:'',text:''}}/>
      <Msg msg={this.props.msg} onCloseDo={this.props.setMessage}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
      ...state 
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      loadProds: (items,filter)=>{dispatch(loadProds(items,filter))},
      setMessage: (payload)=>{dispatch(setMessage(payload))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (NavbarCS);