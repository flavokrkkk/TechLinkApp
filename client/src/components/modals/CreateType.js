import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/deviceAPI';

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('') 

    const addType = () => {
        createType({name: value}).then(data => {
          setValue('')
          onHide()
        })
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new Type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Введите название типа'
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={addType}>Добавить</Button>
          <Button variant='outline-primary' onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateType;