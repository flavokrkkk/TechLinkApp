import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Card from 'react-bootstrap/Card';

const BrandBar = observer (() => {
    const {device} = useContext(Context);

    return (
        <div className=' d-flex flex-wrap justify-content-evenly mb-4' style={{width:'91.5%'}}>
            {device.brands.map(brand => 
                    <Card
                        style={{cursor: 'pointer'}}
                        key={brand.id}
                        className='p-3'
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
        </div>
    );
});

export default BrandBar;