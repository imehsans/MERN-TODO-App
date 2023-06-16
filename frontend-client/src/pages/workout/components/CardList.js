import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';


const CardList = ({ toggler, setToggler }) => {
  const [cards, setCards] = useState([{
    title: 'Card 1',
    reps: 23,
    load: 43,
  }]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);
  const [editId, setEditId] = useState('')

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/workouts/${id}`)
      .then(response => {
        setToggler(!toggler)
      })
      .catch(err => {
        console.log(err.message)
      })
  };


  const handleEdit = (id) => {
    axios.get(`http://localhost:4000/api/workouts/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setReps(response.data.reps);
        setLoad(response.data.load);
        setShowModal(true);
        setEditId(id)
      })
      .catch(error => {
        console.log(error.message);
      })
  };

  useEffect(() => {
    axios.get('http://localhost:4000/api/workouts/')
      .then((response) => {
        setCards(response.data)
        console.log(response.data.id)
        alert(response.data.id.toString())
      })
      .catch((error) => {
        console.log(error.message)
      });
  }, [toggler])

  useEffect(() => {
    setToggler(!toggler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const workoutUpdateData = {
      title: title,
      reps: reps,
      load: load,
    };
    axios
      .patch(`http://localhost:4000/api/workouts/${editId}`, workoutUpdateData)
      .then((response) => {
        setToggler(!toggler);
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='row gap-3 justify-content-between '>
      <h1>Card List</h1>
      {cards && cards.map((card, index) => (
        <Card key={index} className="bg-dark text-light border-light mb-3 col-12 col-md-3">
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>Reps: {card.reps}</Card.Text>
            <Card.Text className='mb-4'>Load: {card.load}</Card.Text>
            <Button variant="danger" className='me-3' onClick={() => handleDelete(card._id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => handleEdit(card._id)}>
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton >
          <Modal.Title>Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark border-2 border-light text-light '>
          <Form onSubmit={handleModalSubmit}>
            <Form.Group className="mb-3" controlId="modalTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="modalReps">
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="modalLoad">
              <Form.Label>Load</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter load"
                value={load}
                onChange={(e) => setLoad(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardList;
