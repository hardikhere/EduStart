import React, { useState } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { _updateSchoolRegForm } from '../../../redux/schoolRegister/actions';

const Step2Form = (props) => {
    const dispatch = useDispatch();
    const schoolRegister = useSelector(state => state.schoolRegister);

    const handleChangeOther = (name, value) => (event) => {
        if (value === undefined)
            schoolRegister.otherInfo[name] = event.target.value;
        else
            schoolRegister.otherInfo[name] = value;
        dispatch(_updateSchoolRegForm(schoolRegister))
    }

    const handleChange = (name, value) => (event) => {
        if (value === undefined)
            schoolRegister[name] = event.target.value;
        else
            schoolRegister[name] = value;
        dispatch(_updateSchoolRegForm(schoolRegister))
    }

    return (
        <Form>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Grade From <sup>*</sup></Form.Label>
                    </Col>
                    <Col>
                        <Form.Control as="select"  onChange={handleChangeOther("gradeFrom")}
                            aria-label="Default select example">
                            <option selected value="nur">Nur</option>
                            <option value="kg">KG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Grade To <sup>*</sup></Form.Label>
                    </Col>
                    <Col>
                        <Form.Control as="select"  onChange={handleChangeOther("gradeTo")}
                            aria-label="Default select example">
                            <option selected value="kg">KG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Entry Age (in Years)</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control as="select"  onChange={handleChange("entryAge")}
                            aria-label="Default select example">
                            <option selected value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group>
                <Form.Row>
                    <Form.Label>Is it private school?</Form.Label>
                </Form.Row>
                <Form.Row>
                    <Form.Check type="radio" label="Yes"
                        checked={schoolRegister.isPrivate}
                        onClick={handleChange("isPrivate", true)} inline name="isPrivate" />

                    <Form.Check type="radio" label="No" inline
                        checked={!!!schoolRegister.isPrivate}
                        name="isPrivate" onClick={handleChange("isPrivate", false)} />
                </Form.Row>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>School Website</Form.Label>
                <Form.Control type="text" placeholder="www.example.com"
                    onChange={handleChange("website")}
                    value={schoolRegister.website}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Write About Your School</Form.Label>
                <Form.Control as="textarea" onChange={handleChange("about")}
                    value={schoolRegister.about} rows={3} />
            </Form.Group>
            <Row className="p-jc-around">
                <Button className="" onClick={() => props.setStep(props.step - 1)}>
                        Back
                 </Button>
                <Button className="" onClick={() => props.setStep(props.step + 1)}>
                        Next
                </Button>
            </Row>
        </Form>
    )
}

export default Step2Form