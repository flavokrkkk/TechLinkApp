import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    // const device =  {id:3, name: 'Apple Iphone 13 pro', price: 899, rating: 5, img:`https://appmistore.ru/pictures/product/middle/27309_middle.jpeg`}
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 гб'},
    //     {id: 2, title: 'Камера', description: '12 мл'},
    //     {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    //     {id: 4, title: 'Ядер', description: '2'},
    //     {id: 5, title: 'Аккумулятор', description: '4000'},
    //     {id: 6, title: 'Страна производитель'},
    //     {id: 7, title: 'California', description: '4000'},
    //     {id: 8, title: 'Тип'},
    //     {id: 9, title: 'Телефон', description: '4000'},
    // ]

    const [device, setDevice] = useState( {info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-4'>
            <Row>
            <Col md={4}>
            <h2 className='mb-4' style={{ fontWeight: '300', marginRight: '130px', textAlign: 'center'}}>{device.name}</h2>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
            </Col>
            <Col md={6}>
                <div className='d-flex flex-column'>
                    <div style={{marginTop: '8px'}}>
                    <span style={{marginRight: '5px'}}>Накопитель: </span>
                    <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-primary">128 ГБ</Button>
                    <Button variant="outline-dark" style={{backgroundColor:'blue', color: '#fff'}}>256 ГБ</Button>
                    <Button variant="outline-primary">512 ГБ</Button>
                    <Button variant="outline-dark" style={{backgroundColor:'blue', color: '#fff'}}>1 ТБ</Button>
                    </ButtonGroup>
                    </div>

                    <div className='d-flex'>
                    <h3 style={{marginTop:'25px', fontWeight: '500'}}>{device.price}$</h3>
                    <Form style={{marginTop:'31px', fontWeight: '500', marginLeft: '100px'}}>
                    {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3" >
                    <Form.Check 
                    style={{color: 'blue'}}
                    type={type}
                    id={`default-${type}`}
                    label={`Товар в наличии`}
                    />
                    </div>))}
                    </Form>
                    </div>


                    <div style={{marginTop:'25px'}}>
                    <p style={{border: '2px solid lightgray', padding: '10px 10px 10px'}}>
                    Приобретая любое устройство в нашем магазине, Вы имеете право осуществить его полную проверку непосредственно ДО ОПЛАТЫ. Никто не будет Вас торопить, при этом всю интересующую Вас информацию Вы сможете уточнить у курьера или на пункте самовывоза в момент распаковки устройства. Подробнее о доставке
                    </p>
                    </div>
                    <Button variant='outline-primary' style={{marginTop:'15px', width: '120px'}}>Купить</Button>
                </div>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1 style={{fontWeight: '300'}} className='mb-4'>
                    Характеристики
                </h1>
                {device.info.map((info, index) => 
                      <Row key={info.id} style={{background: index % 2 === 0 ? '#a8bbe9' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                      </Row>  
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;