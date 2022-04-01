import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import NewCalculator from "./components/NewCalculator";
import {useState} from "react";

function App() {
    const [price1, setPrice1] = useState(0)
    const [price2, setPrice2] = useState(0)

    return (
        <div className="App">
            <Container>
                <p className="mb-5">Nie wiesz którą pizzę wybrać? Sprawdź to uzupełniając dane w poniższym kalkulatorze!</p>
                <Card bg="light">
                    <Card.Title className="m-2" as="h1" style={{color: "#0d4aa4"}}>Która pizza jest bardziej opłacalna?</Card.Title>
                    <Row className="p-5">
                        <Col>
                            <NewCalculator setValue={setPrice1} isBest={price1 < price2}/>
                        </Col>
                        <Col>
                            <NewCalculator setValue={setPrice2} isBest={price2 < price1}/>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default App
