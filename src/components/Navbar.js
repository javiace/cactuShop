import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

 const NavbarCS = (props)=>{

    return(
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">CactuShop <i class="fal fa-cactus"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
      <NavDropdown title="Catálogo" id="basic-nav-dropdown">
        <NavDropdown.Item>Cactus</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item /*onClick={()=>{props.changeView('List_poliza')}}*/>Suculentas</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/cart">Mi carrito <i class="fas fa-shopping-cart"></i></Nav.Link>
    
      </Nav>
      
     
      </Navbar>
 </div>
    )
}

export default NavbarCS;