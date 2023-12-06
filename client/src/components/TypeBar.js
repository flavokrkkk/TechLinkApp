import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import  ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer (() => {
    const {device} = useContext(Context);
    return (
      <ListGroup style={{fontFamily: 'Rubik, sans-serif', fontWeight:'300'}}>
            {device.types.map(type => 
                 <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id} 
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                 </ListGroup.Item>       
            )}
      </ListGroup>
    );
});

export default TypeBar;