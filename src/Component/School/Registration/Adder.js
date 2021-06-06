import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";
const Adder = (props) => {
    const [Text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        if (Text === "") return;
        if (props.array.includes(Text)) return;
        props.appender(Text);
        setText("")
    }
    return (
        <div style={{ width: "100%" }}>


            <Row>
                <Col md={8} lg={10}>
                    <Form.Control type="text" onChange={handleChange} />
                </Col>
                <Col md={4} lg={2} className="pl-0">
                    <Button onClick={handleAdd} style={{ marginLeft: "0" }}>
                        Add
                        </Button>
                </Col>
            </Row>


            <div>
                <ul className="d-flex flex-wrap">
                    {
                        props.array.map(el => {
                            return <li value={el} className="d-flex p-1">
                                {el}
                                <div style={{ color: "red", paddingLeft: "0.3rem", cursor: "pointer" }}
                                    onClick={() => props.deleter(el)}>
                                    &times;
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Adder
