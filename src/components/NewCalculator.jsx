import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Card, Form} from "react-bootstrap";

const NewCalculator = props => {
    const [diameter, setDiameter] = useState("")
    const [count, setCount] = useState("")
    const [price, setPrice] = useState("")

    const handleDiameterChange = (event) => {
        setDiameter(event.target.value)
    };

    const handleCountChange = (event) => {
        setCount(event.target.value)
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    };

    const area = (Math.PI * (diameter / 2) ** 2) * count
    const pricePerArea = (price * count) / area * 100

    useEffect(() => {
        props.setValue(pricePerArea)
    }, [pricePerArea])

    return (
        <Card body
              style={props.isBest ? {background: "rgba(55, 255, 55, 0.09)"} : undefined}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Średnica [cm]</Form.Label>
                    <Form.Control type="number" placeholder="Średnica [cm]" value={diameter}
                                  onChange={handleDiameterChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ilość</Form.Label>
                    <Form.Control type="number" placeholder="Ilość" value={count} onChange={handleCountChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cena</Form.Label>
                    <Form.Control type="number" placeholder="Cena" value={price} onChange={handlePriceChange}/>
                </Form.Group>
            </Form>
            <p>
                Pole całkowite: {area ? area.toFixed(2) : " "} cm<sup>2</sup>
            </p>
            <p>
                Cena za cm<sup>2</sup>: {pricePerArea ? pricePerArea.toFixed(2) : " "} gr.
            </p>
        </Card>

    );
};

NewCalculator.propTypes = {
    isBest: PropTypes.bool,
    setValue: PropTypes.func
};

export default NewCalculator;