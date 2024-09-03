import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStatus } from '../../redux/tableRedux';
import { editTableRequest, getTable } from '../../redux/tableRedux';

const TableForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allStatuses = useSelector(state => getAllStatus(state));
    const table = useSelector(state => getTable(state, id));
    console.log('table', table);
    console.log('allStatuses', allStatuses);
    console.log('id', id);
   
    const [status, setStatus] = useState(table ? table.status : 'uknown');
    const [maxPeople, setMaxPeople] = useState(table ? table.maxPeople : 0);
    const [people, setPeople] = useState(table ? table.people : 0);
    const [bill, setBill] = useState(table ? table.bill : 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editTableRequest({status, maxPeople, people, bill}, id)); // od razu wywołujemy tutaj funkcję editTableRequest() (są nawiasy), 
        // tutaj to nie jest przekazywanie przez referencje a wywołanie. 
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="align-items-center mb-3">
                <Form.Label column sm="1">Name</Form.Label>
                <Col sm="4">
                    <Form.Select
                        size="lg"
                        sm="10"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)} 
                    >
                        {allStatuses.map(status => (<option>{status}</option>))}
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center mb-3">
                <Form.Label column sm="1">People</Form.Label>
                <Col sm="1">
                    <Form.Control
                        type="text"
                        size="lg"
                        value={people}
                        maxLength="20"
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <span>/</span>
                </Col>
                <Col sm="1">
                    <Form.Control
                        type="text"
                        size="lg"
                        value={maxPeople}
                        maxLength="20"
                        onChange={(e) => setMaxPeople(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center mb-3">
            <Form.Label column sm="1">Bill</Form.Label>
                <Col sm="1">
                    <Form.Control
                        type="number"
                        size="lg"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Button mb={3} type="submit">
                Update
            </Button>
        </Form>
    );
}

export default TableForm;