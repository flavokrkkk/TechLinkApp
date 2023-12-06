import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceAPI';
import { useState } from 'react';


const CreateBrand = ({show, onHide}) => {

  const [value, setValue] = useState('') 

  const addBrand = () => {
      createBrand({name: value}).then(data => {
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
            Add new Brand
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
          <Button variant='outline-secondary' onClick={addBrand}>Добавить</Button>
          <Button variant='outline-primary' onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateBrand;