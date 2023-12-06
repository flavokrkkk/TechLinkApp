
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import { Button, Form} from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {useLocation, useNavigate} from 'react-router-dom'
import { NavLink} from 'react-router-dom'
import { login, registration } from '../http/userAPI';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useContext } from 'react';


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
      try{
            let data;
            if(isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)

            }catch(e){
                alert(e.response.data.message)
            }
    }


    return (
        <div style={{backgroundColor:''}}>
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight -54, backgroundColor: '#83abde', fontFamily: 'Rubik, sans-serif', borderLeft: '5px solid white', borderRight: '5px solid white'}}
        >   

            <Card style={{width: 600, borderRadius: '40px'}} className='p-5'>
                <h2 className='m-auto pb-4'>{isLogin ? 'Authorization' : 'Registration'} </h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-2 mb-3'
                        placeholder='Enter email address...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        
                    />
                     <Form.Control 
                        className='mt-2'
                        placeholder='Enter password...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />

                        
                    <div className='d-flex mt-3 justify-content-between'>
                       
                       {isLogin ?
                        <div className='d-flex' style={{gap: '15px'}}>
                            No account? <NavLink to={REGISTRATION_ROUTE} style={{textDecoration: 'none'}}>Sign up!</NavLink>
                        </div>
                        :
                        <div className='d-flex' style={{gap: '15px'}}>
                            Have an account? <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>Login in!</NavLink>
                        </div>
                        }

                        <Button className='btn'
                            variant= 'outline-secondary'
                            onClick={click}
                            >
                            {isLogin ? 'Login in' : 'Sign up'}
                        </Button>

                    </div>
    
                </Form>
            </Card>

        </Container>
        </div>
    );
});

export default Auth;
