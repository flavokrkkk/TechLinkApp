import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }


    return (
        <Navbar  style={{backgroundColor:'#83abde', border: '4px solid #fff', fontFamily: 'Rubik, sans-serif', borderRadius: '20px'}}>
        <Container >
            <NavLink style={{color: 'white', textDecoration:'none', fontSize: '52px', fontWeight:'500'}} to={SHOP_ROUTE}>TechLinx</NavLink>
          {user.isAuth ?
              <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)} >Admin Panel</Button>  
              <Button variant="outline-light" onClick={() => logOut()} className='ms-lg-2'>Exit</Button>  
          </Nav>
          :
              <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>  
          </Nav> 
          }
        </Container>
      </Navbar>
    )
});

export default NavBar;