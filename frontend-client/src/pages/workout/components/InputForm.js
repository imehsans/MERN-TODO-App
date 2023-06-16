import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const InputForm = ({ toggler, setToggler }) => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const workoutUpdateData = {
      title: title,
      reps: reps,
      load: load,
    };
    axios
      .post(`http://localhost:4000/api/workouts/`, workoutUpdateData)
      .then((response) => {
        setToggler(!toggler);
        setTitle('');
        setReps(0);
        setLoad(0);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <Form className='border border-light p-3 rounded-4' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          className='bg-dark text-light placeholder:text-[#f0f0f0] border-top-0 outline-none border-start-0 border-end-0 rounded-0 onfocus:outline-none'
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reps">
        <Form.Label>Reps</Form.Label>
        <Form.Control
          className='bg-dark text-light placeholder:text-[#f0f0f0] border-top-0 outline-none border-start-0 border-end-0 rounded-0 onfocus:outline-none'
          type="number"
          placeholder="Enter reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="load">
        <Form.Label>Load</Form.Label>
        <Form.Control
          className='bg-dark text-light placeholder:text-[#f0f0f0] border-top-0 outline-none border-start-0 border-end-0 rounded-0 onfocus:outline-none'
          type="number"
          placeholder="Enter load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
