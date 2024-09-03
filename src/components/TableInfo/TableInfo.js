import { ListGroup, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableInfo = ({ id, status }) => {
    const navigate = useNavigate();
    const getBadgeColor = (status) => {
        switch (status) {
            case 'Busy':
                return 'danger';
            case 'Reserved':
                return 'warning';
            case 'Cleaning':
                return 'info';
            case 'Free':
                return 'success';
        }
    }

    const handleClick = () => {
        navigate(`/table/${id}`);
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col><b>Table </b>{id}</Col>
                                <Col><b>Status: </b>
                                    <Badge pill bg={getBadgeColor(status)}>{status}</Badge>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button onClick={handleClick}>Edit table</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>

    );
}

export default TableInfo;