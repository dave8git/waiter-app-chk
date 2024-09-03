import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllStatus } from '../../redux/tableRedux';
import { editTableRequest } from '../../redux/tableRedux';

const TableForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { id } = useParams();

    const allStatuses = useSelector(state => getAllStatus(state));
    console.log('allStatuses', allStatuses);
    console.log('id', id);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editTableRequest({status, id, })) // od razu wywołujemy tutaj funkcję editTableRequest() (są nawiasy), 
        // tutaj to nie jest przekazywanie przez referencje a wywołanie. 

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Select>
                    {allStatuses.map(status => (<option>{status}</option>))}
                </Form.Select>
                <Form.Control   
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control   
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Passowrd</Form.Label>
                <Form.Control  
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit">
                Update
            </Button>
        </Form>
    );
}

export default TableForm;