import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className='d-flex flex-column' style={{marginTop: '150px'}}>
            <h1 style={{textAlign: 'center'}}>Admin panel setting</h1>
            <Button variant='outline-primary' className='mt-4 p-3' onClick={() => setTypeVisible(true)}>
                 Add a type
                 </Button>
            <Button variant='outline-primary' className='mt-4 p-3' onClick={() => setBrandVisible(true)}>
                 Add a brand
                 </Button>
            <Button variant='outline-primary' className='mt-4 p-3' onClick={() => setDeviceVisible(true)}>
                 Add a device
                 </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false) }/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;