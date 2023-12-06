import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../asets/star.png'
// import iphone from '../asets/iphone.jpg'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + device.id )}>
            <Card style={{width: 150, cursor: 'pointer', fontSize: '15px'}} border={'white'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className=' text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Apple...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                   
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;