import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { _updateSchoolRegForm } from '../../../redux/schoolRegister/actions';
import AddPillerForm from './AddPillerForm';

const PillarsForm = (props) => {
    const schoolRegister = useSelector(state => state.schoolRegister);
    const dispatch = useDispatch();
    const handleChange = (number) => (event) => {
        schoolRegister.pillars = schoolRegister.pillars.map(el => {
            if (el.number === number) {
                el[event.target.name] = event.target.value;
            }
            return el;
        })
        dispatch(_updateSchoolRegForm(schoolRegister))
    };
    const pillarFormRef = useRef();
    const handleAddPillar = () => {
        schoolRegister.pillars = schoolRegister.pillars.concat({
            number: schoolRegister.pillars.length + 1,
            title: "",
            description: ""
        });
        dispatch(_updateSchoolRegForm(schoolRegister))
    }
    return (
        <div>
            <div ref={pillarFormRef} className="pillarforms">
                {schoolRegister?.pillars?.map((form, find) => {
                    return <AddPillerForm
                        title={form.title}
                        desc={form.description}
                        handleChange={handleChange(form.number)} number={form.number} />
                })}
            </div>

            <Button
                onClick={handleAddPillar}
            >Add More Pillar</Button>


            <Row className="p-jc-around">
                <Button className="" onClick={() => props.setStep(props.step - 1)}>
                    Back
                 </Button>
                <Button className="" onClick={() => props.setStep(props.step + 1)}>
                    Next
                </Button>
            </Row>

        </div>
    )
}

export default PillarsForm;
