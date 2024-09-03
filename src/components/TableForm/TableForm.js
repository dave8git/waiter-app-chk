import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStatus } from '../../redux/tableRedux';
import { editTableRequest, getTable } from '../../redux/tableRedux';

const TableForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch(); 
    const allStatuses = useSelector(state => getAllStatus(state));
    const table = useSelector(state => getTable(state, id));
    console.log('table status', table.status);
    console.log('allStatuses', allStatuses);
    console.log('id', id);

    const [status, setStatus] = useState(table.status);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editTableRequest({})) // od razu wywołujemy tutaj funkcję editTableRequest() (są nawiasy), 
        // tutaj to nie jest przekazywanie przez referencje a wywołanie. 

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}g
                >
                    {allStatuses.map(status => (<option>{status}</option>))}
                </Form.Select>
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