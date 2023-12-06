import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '..';
import DeviceItem from './DeviceItem';


const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className='d-flex flex-wrap gap-4 '>
            {device.devices.map(device =>
                <div style={{width:'23%'}} key={device.id}>
                  <DeviceItem device={device}/>  
                </div>
                )}
        </div>
    );
});

export default DeviceList;